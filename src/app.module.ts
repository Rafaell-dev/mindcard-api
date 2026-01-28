import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './controllers/modules/user/user.module';
import { MindcardModule } from './controllers/modules/mindcard/mindcard.module';
import { ItemMindcardModule } from './controllers/modules/itemMindcard/itemMindcard.module';
import { FaculdadeModule } from './modules/faculdade/faculdade.module';
import { DeckModule } from './controllers/modules/deck/deck.module';
import { AuthModule } from './modules/auth/authModule';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { R2Module } from './r2/r2.module';
import { GeminiModule } from './gemini/gemini.module';
import { QueueModule } from './queue/queue.module';
import { LoggerModule } from './logger/logger.module';
import { HealthModule } from './health/health.module';
import r2Config from './config/r2.config';
import geminiConfig from './config/gemini.config';
import redisConfig from './config/redis.config';
import queueConfig from './config/queue.config';
import jwtConfig from './config/jwt.config';
import googleOAuthConfig from './config/google-oauth.config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards';

@Module({
  imports: [
    LoggerModule,
    HealthModule,
    DatabaseModule,
    UserModule,
    MindcardModule,
    ItemMindcardModule,
    FaculdadeModule,
    DeckModule,
    AuthModule,
    OnboardingModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        r2Config,
        geminiConfig,
        redisConfig,
        queueConfig,
        jwtConfig,
        googleOAuthConfig,
      ],
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
    // Uncomment the following to protect all routes with JWT by default
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
