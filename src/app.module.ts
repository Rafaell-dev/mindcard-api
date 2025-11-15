import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './controllers/modules/user/user.module';
import { MindcardModule } from './controllers/modules/mindcard/mindcard.module';
import { CardModule } from './controllers/modules/card/card.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { R2Module } from './r2/r2.module';
import { GeminiModule } from './gemini/gemini.module';
import { QueueModule } from './queue/queue.module';
import r2Config from './config/r2.config';
import geminiConfig from './config/gemini.config';
import redisConfig from './config/redis.config';
import queueConfig from './config/queue.config';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    MindcardModule,
    CardModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [r2Config, geminiConfig, redisConfig, queueConfig],
    }),
    R2Module,
    QueueModule,
    GeminiModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const geminiOptions =
          config.get<ReturnType<typeof geminiConfig>>('gemini');
        if (!geminiOptions) {
          throw new Error('Gemini configuration not found');
        }
        return geminiOptions;
      },
    }),
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
