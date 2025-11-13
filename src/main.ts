import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { BadRequestException } from './exceptions/BadRequestException';
import { mapperClassValidationErrorToAppException } from './utils/mappers';
import { AppModule } from './app.module';
import { env } from './config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory(errors: ValidationError[]) {
        throw new BadRequestException({
          fields: mapperClassValidationErrorToAppException(errors),
        });
      },
    }),
  );

  const port = env.PORT;
  const host = env.HOST;

  await app.listen(port, host);
  console.log(`🚀 Aplicação rodando em: http://${host}:${port}/api/v1`);
}
void bootstrap();
