import { AppException } from './appException';
import { HttpStatus } from '@nestjs/common';

export class GeminiApiException extends AppException {
  constructor(message: string, status: HttpStatus = HttpStatus.BAD_GATEWAY) {
    super({
      message: `GEMINI_API_ERROR: ${message}`,
      status,
    });
  }
}
