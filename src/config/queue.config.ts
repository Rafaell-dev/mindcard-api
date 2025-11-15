import { registerAs } from '@nestjs/config';

export default registerAs('queue', () => ({
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY || '3', 10),
  maxRetries: parseInt(process.env.QUEUE_MAX_RETRIES || '3', 10),
  timeout: parseInt(process.env.QUEUE_TIMEOUT || '300000', 10), // 5 minutos
  rateLimit: {
    max: 60, // máximo de jobs por janela
    duration: 60000, // 1 minuto
  },
  defaultJobOptions: {
    removeOnComplete: {
      count: 1000, // manter últimos 1000 jobs completados
      age: 14 * 24 * 3600, // 14 dias em segundos
    },
    removeOnFail: {
      count: 5000, // manter últimos 5000 jobs falhados
      age: 30 * 24 * 3600, // 30 dias em segundos
    },
  },
}));
