import { Injectable } from '@nestjs/common';
import { User, type UserProps } from 'src/modules/user/entities/User';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import { PrismaService } from '../prisma.service';
import { OAuthProfile } from 'src/modules/auth/interfaces';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);

    await this.prisma.usuario.create({
      data: userRaw,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
      include: {
        faculdade: {
          select: {
            nome: true,
          },
        },
      },
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async findByGoogleId(googleId: string): Promise<User | null> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        google_id: googleId,
      },
      include: {
        faculdade: {
          select: {
            nome: true,
          },
        },
      },
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async createOAuthUser(profile: OAuthProfile): Promise<User> {
    const newUser = new User({
      email: profile.email,
      nome: profile.nome,
      googleId: profile.googleId,
      avatarUrl: profile.avatarUrl,
      provider: 'google',
    });

    const userRaw = PrismaUserMapper.toPrisma(newUser);

    await this.prisma.usuario.create({
      data: userRaw,
    });

    return newUser;
  }

  async updateById(id: string, user: Partial<UserProps>): Promise<User | null> {
    const userRaw = PrismaUserMapper.toPrismaPartial(user);

    const updatedUser = await this.prisma.usuario.update({
      where: {
        id,
      },
      data: userRaw,
    });

    if (!updatedUser) return null;

    return PrismaUserMapper.toDomain(updatedUser);
  }

  async countUsers(): Promise<number> {
    return this.prisma.usuario.count();
  }

  /**
   * Deleta um usuário e todos os seus dados relacionados (LGPD - Art. 18, VI).
   * A deleção é feita em cascata, removendo:
   * - Opções de resposta dos cards
   * - Cards dos mindcards
   * - Mindcards do usuário
   * - Práticas do usuário
   * - Respostas de onboarding do usuário
   * - O próprio usuário
   */
  async delete(id: string): Promise<void> {
    await this.prisma.$transaction(async (tx) => {
      // 1. Buscar todos os mindcards do usuário
      const mindcards = await tx.mindcard.findMany({
        where: { usuario_id: id },
        select: { id: true },
      });

      const mindcardIds = mindcards.map((m) => m.id);

      // 2. Buscar todos os cards dos mindcards
      const cards = await tx.card.findMany({
        where: { mindcard_id: { in: mindcardIds } },
        select: { id: true },
      });

      const cardIds = cards.map((c) => c.id);

      // 3. Deletar opções de resposta dos cards
      await tx.opcao_resposta.deleteMany({
        where: { card_id: { in: cardIds } },
      });

      // 4. Deletar cards
      await tx.card.deleteMany({
        where: { id: { in: cardIds } },
      });

      // 5. Deletar práticas do usuário
      await tx.pratica.deleteMany({
        where: { usuario_id: id },
      });

      // 6. Deletar mindcards do usuário
      await tx.mindcard.deleteMany({
        where: { usuario_id: id },
      });

      // 7. Deletar respostas de onboarding (já tem onDelete: Cascade, mas garantimos aqui)
      await tx.resposta_onboarding.deleteMany({
        where: { usuario_id: id },
      });

      // 8. Finalmente, deletar o usuário
      await tx.usuario.delete({
        where: { id },
      });
    });
  }
}
