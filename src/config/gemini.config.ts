import { registerAs } from '@nestjs/config';
import type { GeminiOptions } from 'src/gemini/interfaces/gemini-options.interface';
import { env } from './env.config';

/**
 * Gemini AI configuration
 * Load from environment variables
 */
export default registerAs(
  'gemini',
  (): GeminiOptions => ({
    apiKey: env.GEMINI_API_KEY,
    model: env.GEMINI_MODEL,
    temperature: env.GEMINI_TEMPERATURE,
    maxTokens: env.GEMINI_MAX_TOKENS,
    topP: env.GEMINI_TOP_P,
    topK: env.GEMINI_TOP_K,
    enableCache: env.GEMINI_ENABLE_CACHE,
    cacheTTL: env.GEMINI_CACHE_TTL,
    enableRateLimit: env.GEMINI_ENABLE_RATE_LIMIT,
    requestsPerMinute: env.GEMINI_REQUESTS_PER_MINUTE,
    maxRetries: env.GEMINI_MAX_RETRIES,
    retryDelay: env.GEMINI_RETRY_DELAY,
  }),
);
