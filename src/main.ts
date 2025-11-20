import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { BadRequestException } from './exceptions/BadRequestException';
import { mapperClassValidationErrorToAppException } from './utils/mappers';
import { AppModule } from './app.module';
import { env } from './config/env.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpLoggingInterceptor } from './logger/interceptors/http-logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.useGlobalInterceptors(new HttpLoggingInterceptor());

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  app.setGlobalPrefix('api/v1', {
    exclude: [
      '/admin/queues',
      '/admin/queues/(.*)',
      '/api-docs',
      '/api-docs/(.*)',
    ],
  });

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('MindCard API')
    .setDescription(
      'API para geração de flashcards e quizzes usando IA (Gemini) a partir de documentos PDF e imagens. ' +
        'Processamento assíncrono com filas BullMQ e armazenamento em Cloudflare R2.',
    )
    .setVersion('1.0')
    .addTag('Usuário', 'Gerenciamento de usuários')
    .addTag(
      'Mindcard',
      'Gerenciamento de mindcards (conjuntos de flashcards/quizzes)',
    )
    .addTag('Card', 'Gerenciamento de cards (flashcards e questões)')
    .addTag('Status', 'Monitoramento de jobs assíncronos')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Token JWT para autenticação',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    customSiteTitle: 'MindCard API - Documentação',
    customfavIcon: 'https://nestjs.com/img/logo-small.svg',
    customCss: '.swagger-ui .topbar { display: none }',
  });

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
  logger.log(`🚀 Aplicação rodando em: http://${host}:${port}/api/v1`);
  logger.log(`📚 Documentação disponível em: http://${host}:${port}/api-docs`);
}
void bootstrap();
