import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './controllers/modules/user/user.module';
import { MindcardModule } from './controllers/modules/mindcard/mindcard.module';
import { CardModule } from './controllers/modules/card/card.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { R2Module } from './r2/r2.module';
import { GeminiModule } from './gemini/gemini.module';
import r2Config from './config/r2.config';
import geminiConfig from './config/gemini.config';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    MindcardModule,
    CardModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [r2Config, geminiConfig],
    }),
    R2Module,
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
