export interface FaculdadeProps {
  id?: string;
  codigoIes: number;
  nome: string;
  sigla?: string | null;
  categoria?: 'PRIVADA' | 'PUBLICA' | null;
  organizacaoAcademica?: string | null;
  codigoMunicipioIbge?: string | null;
  municipio: string;
  uf: string;
  situacao: 'ATIVA' | 'INATIVA';
}

export class Faculdade {
  readonly id: string;
  readonly codigoIes: number;
  nome: string;
  sigla?: string | null;
  categoria?: 'PRIVADA' | 'PUBLICA' | null;
  organizacaoAcademica?: string | null;
  codigoMunicipioIbge?: string | null;
  municipio: string;
  uf: string;
  situacao: 'ATIVA' | 'INATIVA';

  constructor(props: FaculdadeProps) {
    this.id = props.id!;
    this.codigoIes = props.codigoIes;
    this.nome = props.nome;
    this.sigla = props.sigla;
    this.categoria = props.categoria;
    this.organizacaoAcademica = props.organizacaoAcademica;
    this.codigoMunicipioIbge = props.codigoMunicipioIbge;
    this.municipio = props.municipio;
    this.uf = props.uf;
    this.situacao = props.situacao;
  }
}
