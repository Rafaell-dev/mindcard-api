import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHttp(data: User) {
    return {
      id: data.id,
      email: data.email,
      nome: data.nome,
      faculdade: data.faculdade,
      idioma: data.idioma,
      dataRegistro: data.dataRegistro,
      xpTotal: data.xpTotal,
      sequenciaAtual: data.sequenciaAtual,
      sequenciaRecorde: data.sequenciaRecorde,
    };
  }
}
