import {
  SafetySetting,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

/**
 * Configuration options for Gemini AI integration
 */
export interface GeminiOptions {
  /**
   * Google Gemini API key
   */
  apiKey: string;

  /**
   * Model name (default: gemini-1.5-flash)
   * Available models: gemini-1.5-pro, gemini-1.5-flash, gemini-pro-vision
   */
  model?: string;

  /**
   * Temperature for response generation (0.0 - 2.0)
   * Higher values = more creative/random, Lower values = more deterministic
   * @default 0.7
   */
  temperature?: number;

  /**
   * Maximum number of tokens to generate
   * @default 2048
   */
  maxTokens?: number;

  /**
   * Top-p sampling parameter (0.0 - 1.0)
   * @default 0.95
   */
  topP?: number;

  /**
   * Top-k sampling parameter
   * @default 40
   */
  topK?: number;

  /**
   * Safety settings for content filtering
   */
  safetySettings?: SafetySetting[];

  /**
   * Enable response caching
   * @default false
   */
  enableCache?: boolean;

  /**
   * Cache TTL in seconds
   * @default 3600 (1 hour)
   */
  cacheTTL?: number;

  /**
   * Maximum retry attempts for failed requests
   * @default 3
   */
  maxRetries?: number;

  /**
   * Initial retry delay in milliseconds
   * @default 1000
   */
  retryDelay?: number;

  /**
   * Enable rate limiting
   * @default true
   */
  enableRateLimit?: boolean;

  /**
   * Maximum requests per minute
   * @default 60
   */
  requestsPerMinute?: number;
}

/**
 * Async options for dynamic module configuration
 */
export interface GeminiAsyncOptions {
  useFactory: (...args: any[]) => Promise<GeminiOptions> | GeminiOptions;
  inject?: any[];
}

/**
 * Default safety settings to prevent harmful content
 */
export const DEFAULT_SAFETY_SETTINGS: SafetySetting[] = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
