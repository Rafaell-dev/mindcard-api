import { StatusProcessamento } from './job-data.interface';

export interface JobStatusResponse {
  jobId: string;
  mindcardId: string;
  status: StatusProcessamento;
  progress: number; // 0-100
  estimatedTimeRemaining?: number; // em segundos
  error?: string;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  failedAt?: Date;
  attempts: number;
  maxAttempts: number;
}

export interface JobLogEntry {
  id: string;
  jobId: string;
  mindcardId: string;
  event: string;
  timestamp: Date;
  metadata?: Record<string, any>;
  error?: string;
}

export interface JobLogsResponse {
  mindcardId: string;
  totalLogs: number;
  logs: JobLogEntry[];
}
