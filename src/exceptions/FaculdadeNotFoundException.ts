import { AppException } from './appException';
import { HttpStatus } from '@nestjs/common';

export class FaculdadeNotFoundException extends AppException {
  constructor() {
    super({
      message: 'Faculdade não encontrada',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
