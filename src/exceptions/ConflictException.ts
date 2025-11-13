import { AppException } from './appException';
import { HttpStatus } from '@nestjs/common';

export class ConflictException extends AppException {
  constructor() {
    super({
      message: 'CONFLICT',
      status: HttpStatus.CONFLICT,
    });
  }
}
