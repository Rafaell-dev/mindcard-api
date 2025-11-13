// Module
export { GeminiModule } from './gemini.module';
export { GeminiService } from './gemini.service';

// Interfaces
export type {
  GeminiOptions,
  GeminiAsyncOptions,
} from './interfaces/gemini-options.interface';
export { DEFAULT_SAFETY_SETTINGS } from './interfaces/gemini-options.interface';
export type {
  Flashcard,
  FlashcardGenerationResponse,
} from './interfaces/flashcard.interface';
export { FlashcardDificuldade } from './interfaces/flashcard.interface';
export type {
  Question,
  QuestionOption,
  QuestionGenerationResponse,
} from './interfaces/question.interface';

// Decorators
export { InjectGemini } from './decorators/inject-gemini.decorator';

// Exceptions
export { GeminiApiException } from '../exceptions/GeminiApiException';
export { GeminiRateLimitException } from '../exceptions/GeminiRateLimitException';

// Utils
export { FileValidator } from './utils/file-validator';

// Constants
export {
  GEMINI_OPTIONS,
  SUPPORTED_MIME_TYPES,
  MAX_INLINE_FILE_SIZE,
  MAX_FILE_API_SIZE,
  DEFAULT_MODEL,
  DEFAULT_TEMPERATURE,
  DEFAULT_MAX_TOKENS,
  DEFAULT_TOP_P,
  DEFAULT_TOP_K,
  DEFAULT_REQUESTS_PER_MINUTE,
  DEFAULT_MAX_RETRIES,
  DEFAULT_RETRY_DELAY,
  DEFAULT_CACHE_TTL,
} from './constants/gemini.constants';
