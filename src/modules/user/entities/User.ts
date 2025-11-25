import { randomUUID } from 'crypto';

export interface UserProps {
  id?: string;
  email: string;
  senha: string;
  nome: string;
  faculdadeId: string;
  faculdadeNome?: string;
  idioma: string;
  dataRegistro?: Date;
  xpTotal?: number;
  sequenciaAtual?: number;
  sequenciaRecorde?: number;
}

export class User {
  readonly id: string;
  email: string;
  senha: string;
  nome: string;
  faculdadeId: string;
  faculdadeNome?: string;
  idioma: string;
  readonly dataRegistro: Date;
  xpTotal: number;
  sequenciaAtual: number;
  sequenciaRecorde: number;

  constructor(props: UserProps) {
    this.id = props.id ?? randomUUID();
    this.email = props.email;
    this.senha = props.senha;
    this.nome = props.nome;
    this.faculdadeId = props.faculdadeId;
    this.faculdadeNome = props.faculdadeNome;
    this.idioma = props.idioma;
    this.dataRegistro = props.dataRegistro ?? new Date();
    this.xpTotal = props.xpTotal ?? 0;
    this.sequenciaAtual = props.sequenciaAtual ?? 0;
    this.sequenciaRecorde = props.sequenciaRecorde ?? 0;
  }
}
