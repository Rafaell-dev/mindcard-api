import { randomUUID } from 'crypto';

export interface UserProps {
  id?: string;
  email: string;
  senha?: string;
  nome?: string;
  usuario?: string;
  faculdadeId?: string;
  faculdadeNome?: string;
  googleId?: string;
  provider?: string;
  avatarUrl?: string;
  idioma?: string;
  celular?: string;
  dataNascimento?: Date;
  onboardingCompleto?: boolean;
  dataRegistro?: Date;
  xpTotal?: number;
  sequenciaAtual?: number;
  sequenciaRecorde?: number;
}

export class User {
  readonly id: string;
  email: string;
  senha?: string;
  nome?: string;
  usuario?: string;
  faculdadeId?: string;
  faculdadeNome?: string;
  googleId?: string;
  provider: string;
  avatarUrl?: string;
  idioma: string;
  celular?: string;
  dataNascimento?: Date;
  onboardingCompleto: boolean;
  readonly dataRegistro: Date;
  xpTotal: number;
  sequenciaAtual: number;
  sequenciaRecorde: number;

  constructor(props: UserProps) {
    this.id = props.id ?? randomUUID();
    this.email = props.email;
    this.senha = props.senha;
    this.nome = props.nome;
    this.usuario = props.usuario;
    this.faculdadeId = props.faculdadeId;
    this.faculdadeNome = props.faculdadeNome;
    this.googleId = props.googleId;
    this.provider = props.provider ?? 'local';
    this.avatarUrl = props.avatarUrl;
    this.idioma = props.idioma ?? 'pt-BR';
    this.celular = props.celular;
    this.dataNascimento = props.dataNascimento;
    this.onboardingCompleto = props.onboardingCompleto ?? false;
    this.dataRegistro = props.dataRegistro ?? new Date();
    this.xpTotal = props.xpTotal ?? 0;
    this.sequenciaAtual = props.sequenciaAtual ?? 0;
    this.sequenciaRecorde = props.sequenciaRecorde ?? 0;
  }
}
