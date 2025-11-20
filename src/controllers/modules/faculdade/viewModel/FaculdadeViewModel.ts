import { Faculdade } from 'src/modules/faculdade/entities/Faculdade';

export class FaculdadeViewModel {
  static toHttp(data: Faculdade) {
    return {
      id: data.id,
      nome: data.nome,
      sigla: data.sigla,
      municipio: data.municipio,
      uf: data.uf,
    };
  }
}
