import { User, type UserProps } from '../entities/User';

type Override = Partial<UserProps>;

export const makeUser = (override: Override = {}) => {
  const userProps: UserProps = {
    id: override.id,
    email: override.email ?? 'email@gmail.com',
    senha: override.senha ?? '123123',
    nome: override.nome ?? 'Vitor',
    faculdade: override.faculdade ?? 'Faculdade XPTO',
    idioma: override.idioma ?? 'pt-BR',
    dataRegistro: override.dataRegistro ?? new Date(),
    xpTotal: override.xpTotal ?? 0,
    sequenciaAtual: override.sequenciaAtual ?? 0,
    sequenciaRecorde: override.sequenciaRecorde ?? 0,
  };

  return new User(userProps);
};
