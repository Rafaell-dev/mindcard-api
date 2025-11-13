import { AppException } from './appException';
import { HttpStatus } from '@nestjs/common';

export class NotFoundException extends AppException {
  constructor() {
    super({
      message: 'NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
