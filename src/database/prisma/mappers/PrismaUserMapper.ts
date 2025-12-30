import { User, type UserProps } from 'src/modules/user/entities/User';
import type { usuario as PrismaUser } from '@prisma/client';

const resolveUsername = (email: string) => email;

export class PrismaUserMapper {
  static toPrisma(user: User): PrismaUser {
    return {
      id: user.id,
      email: user.email,
      nome: user.nome ?? null,
      senha: user.senha ?? null,
      faculdade_id: user.faculdadeId ?? null,
      idioma: user.idioma,
      data_registro: user.dataRegistro,
      xp_total: user.xpTotal,
      sequencia_atual: user.sequenciaAtual,
      sequencia_recorde: user.sequenciaRecorde,
      usuario: user.usuario ?? resolveUsername(user.email),
      google_id: user.googleId ?? null,
      provider: user.provider,
      avatar_url: user.avatarUrl ?? null,
      celular: user.celular ?? null,
      data_nascimento: user.dataNascimento ?? null,
      onboarding_completo: user.onboardingCompleto,
    };
  }

  static toPrismaPartial(user: Partial<UserProps>): Partial<PrismaUser> {
    const partial: Partial<PrismaUser> = {};

    if (user.id !== undefined) partial.id = user.id;
    if (user.email !== undefined) {
      partial.email = user.email;
      partial.usuario = resolveUsername(user.email);
    }
    if (user.nome !== undefined) partial.nome = user.nome;
    if (user.senha !== undefined) partial.senha = user.senha;
    if (user.faculdadeId !== undefined) partial.faculdade_id = user.faculdadeId;
    if (user.idioma !== undefined) partial.idioma = user.idioma;
    if (user.dataRegistro !== undefined)
      partial.data_registro = user.dataRegistro;
    if (user.xpTotal !== undefined) partial.xp_total = user.xpTotal;
    if (user.sequenciaAtual !== undefined)
      partial.sequencia_atual = user.sequenciaAtual;
    if (user.sequenciaRecorde !== undefined)
      partial.sequencia_recorde = user.sequenciaRecorde;
    if (user.googleId !== undefined) partial.google_id = user.googleId;
    if (user.provider !== undefined) partial.provider = user.provider;
    if (user.avatarUrl !== undefined) partial.avatar_url = user.avatarUrl;
    if (user.celular !== undefined) partial.celular = user.celular;
    if (user.dataNascimento !== undefined)
      partial.data_nascimento = user.dataNascimento;
    if (user.onboardingCompleto !== undefined)
      partial.onboarding_completo = user.onboardingCompleto;

    return partial;
  }

  static toDomain(
    user: PrismaUser & { faculdade?: { nome: string } | null },
  ): User {
    return new User({
      id: user.id,
      email: user.email,
      nome: user.nome ?? undefined,
      senha: user.senha ?? undefined,
      usuario: user.usuario,
      faculdadeId: user.faculdade_id ?? undefined,
      faculdadeNome: user.faculdade?.nome,
      googleId: user.google_id ?? undefined,
      provider: user.provider,
      avatarUrl: user.avatar_url ?? undefined,
      idioma: user.idioma,
      celular: user.celular ?? undefined,
      dataNascimento: user.data_nascimento ?? undefined,
      onboardingCompleto: user.onboarding_completo,
      dataRegistro: user.data_registro,
      xpTotal: user.xp_total,
      sequenciaAtual: user.sequencia_atual,
      sequenciaRecorde: user.sequencia_recorde,
    });
  }
}
