import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { QUEUE_NAMES } from './queue.constants';
import redisConfig from '../config/redis.config';
import queueConfig from '../config/queue.config';

@Module({
  imports: [
    ConfigModule.forFeature(redisConfig),
    ConfigModule.forFeature(queueConfig),

    // Configurar BullMQ com Redis
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: configService.get('redis.host'),
          port: configService.get('redis.port'),
          password: configService.get('redis.password'),
          db: configService.get('redis.db'),
          maxRetriesPerRequest: null,
          enableReadyCheck: false,
        },
        defaultJobOptions: configService.get('queue.defaultJobOptions'),
      }),
      inject: [ConfigService],
    }),

    // Registrar fila principal: mindcard-generation
    BullModule.registerQueue({
      name: QUEUE_NAMES.MINDCARD_GENERATION,
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 30000, // 30 segundos
        },
        removeOnComplete: {
          count: 100,
          age: 7 * 24 * 3600,
        },
        removeOnFail: {
          count: 500,
          age: 30 * 24 * 3600,
        },
      },
    }),

    // Registrar fila de logs
    BullModule.registerQueue({
      name: QUEUE_NAMES.MINDCARD_LOGS,
      defaultJobOptions: {
        attempts: 2,
        removeOnComplete: {
          count: 1000,
          age: 7 * 24 * 3600, // 7 dias
        },
        removeOnFail: {
          count: 100,
          age: 7 * 24 * 3600,
        },
      },
    }),

    // Registrar fila de notificações
    BullModule.registerQueue({
      name: QUEUE_NAMES.MINDCARD_NOTIFICATIONS,
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'fixed',
          delay: 5000,
        },
        removeOnComplete: {
          count: 500,
          age: 3 * 24 * 3600, // 3 dias
        },
      },
    }),

    // Configurar Bull Board para monitoramento
    BullBoardModule.forRoot({
      route: '/admin/queues',
      adapter: ExpressAdapter,
      middleware: {
        bodyParser: {
          json: { limit: '50mb' },
        },
      },
    }),

    BullBoardModule.forFeature({
      name: QUEUE_NAMES.MINDCARD_GENERATION,
      adapter: BullMQAdapter,
    }),

    BullBoardModule.forFeature({
      name: QUEUE_NAMES.MINDCARD_LOGS,
      adapter: BullMQAdapter,
    }),

    BullBoardModule.forFeature({
      name: QUEUE_NAMES.MINDCARD_NOTIFICATIONS,
      adapter: BullMQAdapter,
    }),
  ],
  exports: [BullModule],
})
export class QueueModule {}
