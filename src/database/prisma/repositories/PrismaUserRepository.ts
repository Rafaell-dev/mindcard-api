import { Injectable } from '@nestjs/common';
import { User, type UserProps } from 'src/modules/user/entities/User';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import { PrismaService } from '../prisma.service';

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
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
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
}
