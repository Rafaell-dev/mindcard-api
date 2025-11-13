import { User, type UserProps } from 'src/modules/user/entities/User';
import type { usuario as PrismaUser } from 'generated/prisma';

const resolveUsername = (email: string) => email;

export class PrismaUserMapper {
  static toPrisma(user: User): PrismaUser {
    return {
      id: user.id,
      email: user.email,
      nome: user.nome,
      senha: user.senha,
      faculdade: user.faculdade,
      idioma: user.idioma,
      data_registro: user.dataRegistro,
      xp_total: user.xpTotal,
      sequencia_atual: user.sequenciaAtual,
      sequencia_recorde: user.sequenciaRecorde,
      usuario: resolveUsername(user.email),
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
    if (user.faculdade !== undefined) partial.faculdade = user.faculdade;
    if (user.idioma !== undefined) partial.idioma = user.idioma;
    if (user.dataRegistro !== undefined)
      partial.data_registro = user.dataRegistro;
    if (user.xpTotal !== undefined) partial.xp_total = user.xpTotal;
    if (user.sequenciaAtual !== undefined)
      partial.sequencia_atual = user.sequenciaAtual;
    if (user.sequenciaRecorde !== undefined)
      partial.sequencia_recorde = user.sequenciaRecorde;

    return partial;
  }

  static toDomain(user: PrismaUser): User {
    return new User({
      id: user.id,
      email: user.email,
      nome: user.nome,
      senha: user.senha,
      faculdade: user.faculdade ?? '',
      idioma: user.idioma,
      dataRegistro: user.data_registro,
      xpTotal: user.xp_total,
      sequenciaAtual: user.sequencia_atual,
      sequenciaRecorde: user.sequencia_recorde,
    });
  }
}
