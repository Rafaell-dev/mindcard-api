export enum TipoGeracao {
  FLASHCARD = 'FLASHCARD',
  QUIZ = 'QUIZ',
  AMBOS = 'AMBOS',
}

export enum StatusProcessamento {
  PENDENTE = 'PENDENTE',
  PROCESSANDO = 'PROCESSANDO',
  CONCLUIDO = 'CONCLUIDO',
  FALHOU = 'FALHOU',
}

export enum JobEvent {
  JOB_STARTED = 'JOB_STARTED',
  FILE_VALIDATED = 'FILE_VALIDATED',
  GEMINI_REQUEST_SENT = 'GEMINI_REQUEST_SENT',
  GEMINI_RESPONSE_RECEIVED = 'GEMINI_RESPONSE_RECEIVED',
  CARDS_SAVED = 'CARDS_SAVED',
  JOB_COMPLETED = 'JOB_COMPLETED',
  JOB_FAILED = 'JOB_FAILED',
}

export interface MindcardGenerationJobData {
  mindcardId: string;
  userId: string;
  fileBufferBase64: string; // Buffer em Base64 (para serialização no Redis)
  fileName: string;
  mimeType: string; // MIME type do arquivo
  fileSize: number;
  tipoGeracao: TipoGeracao;
  promptPersonalizado?: string;
}

export interface MindcardLogJobData {
  jobId: string;
  mindcardId: string;
  event: JobEvent;
  timestamp: Date;
  metadata?: Record<string, any>;
  error?: string;
}

export interface MindcardNotificationJobData {
  userId: string;
  mindcardId: string;
  status: StatusProcessamento;
  message: string;
  jobId: string;
}
