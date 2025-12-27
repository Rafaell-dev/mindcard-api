import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHttp(data: User) {
    return {
      id: data.id,
      email: data.email,
      nome: data.nome,
      usuario: data.usuario,
      faculdadeId: data.faculdadeId,
      faculdadeNome: data.faculdadeNome,
      idioma: data.idioma,
      dataRegistro: data.dataRegistro,
      xpTotal: data.xpTotal,
      sequenciaAtual: data.sequenciaAtual,
      sequenciaRecorde: data.sequenciaRecorde,
    };
  }
}
