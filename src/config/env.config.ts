/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { config } from 'dotenv';
import type Pino from 'pino';

// Load environment variables
config({
  path: process.env.NODE_ENV === 'homolog' ? '.env.homolog' : '.env',
});

type Environment = 'homolog' | 'production';

// Required environment variables
const requiredEnvVars = [
  'DATABASE_URL',
  'DATABASE_PASSWORD',
  'R2_ENDPOINT',
  'R2_ACCESS_KEY_ID',
  'R2_SECRET_ACCESS_KEY',
  'R2_BUCKET_NAME',
  'GEMINI_API_KEY',
  'GEMINI_MODEL',
] as const;

// Validate required environment variables
function validateEnv(): void {
  const missing: string[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.map((v) => `  - ${v}`).join('\n')}\n\nPlease check your .env file.`,
    );
  }
}

// Run validation
validateEnv();

export const env = {
  // Application
  NODE_ENV: process.env.NODE_ENV ?? ('homolog' as Environment),
  LOG_LEVEL: (process.env.LOG_LEVEL ?? 'info') as Pino.Level,
  HOST: process.env.HOST ?? 'localhost',
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3002,

  // Database
  DATABASE_URL: process.env.DATABASE_URL!,
  DATABASE_USER: process.env.DATABASE_USER ?? 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD!,

  // Cloudflare R2
  R2_ENDPOINT: process.env.R2_ENDPOINT!,
  R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID!,
  R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY!,
  R2_BUCKET_NAME: process.env.R2_BUCKET_NAME!,

  // Gemini AI
  GEMINI_API_KEY: process.env.GEMINI_API_KEY!,
  GEMINI_MODEL: process.env.GEMINI_MODEL!,
  GEMINI_TEMPERATURE: process.env.GEMINI_TEMPERATURE
    ? parseFloat(process.env.GEMINI_TEMPERATURE)
    : 0.7,
  GEMINI_MAX_TOKENS: process.env.GEMINI_MAX_TOKENS
    ? parseInt(process.env.GEMINI_MAX_TOKENS, 10)
    : 8192,
  GEMINI_TOP_P: process.env.GEMINI_TOP_P
    ? parseFloat(process.env.GEMINI_TOP_P)
    : 0.95,
  GEMINI_TOP_K: process.env.GEMINI_TOP_K
    ? parseInt(process.env.GEMINI_TOP_K, 10)
    : 40,
  GEMINI_ENABLE_CACHE: process.env.GEMINI_ENABLE_CACHE === 'true',
  GEMINI_CACHE_TTL: process.env.GEMINI_CACHE_TTL
    ? parseInt(process.env.GEMINI_CACHE_TTL, 10)
    : 3600,
  GEMINI_ENABLE_RATE_LIMIT: process.env.GEMINI_ENABLE_RATE_LIMIT !== 'false',
  GEMINI_REQUESTS_PER_MINUTE: process.env.GEMINI_REQUESTS_PER_MINUTE
    ? parseInt(process.env.GEMINI_REQUESTS_PER_MINUTE, 10)
    : 60,
  GEMINI_MAX_RETRIES: process.env.GEMINI_MAX_RETRIES
    ? parseInt(process.env.GEMINI_MAX_RETRIES, 10)
    : 3,
  GEMINI_RETRY_DELAY: process.env.GEMINI_RETRY_DELAY
    ? parseInt(process.env.GEMINI_RETRY_DELAY, 10)
    : 1000,
} as const;
