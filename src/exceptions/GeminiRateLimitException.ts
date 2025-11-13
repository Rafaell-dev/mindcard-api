import { AppException } from './appException';
import { HttpStatus } from '@nestjs/common';

export class GeminiRateLimitException extends AppException {
  constructor(retryAfter?: number) {
    super({
      message: retryAfter
        ? `GEMINI_RATE_LIMIT: Retry after ${retryAfter}s`
        : 'GEMINI_RATE_LIMIT: Too many requests',
      status: HttpStatus.TOO_MANY_REQUESTS,
    });
  }
}
