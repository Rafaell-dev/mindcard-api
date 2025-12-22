import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import type { StringValue } from 'ms';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from './authService';
import { AuthController } from './authController';
import { LocalStrategy } from './strategies/localStrategy';
import { JwtStrategy } from './strategies/jwtStrategy';
import { GoogleStrategy } from './strategies/googleStrategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret =
          configService.get<string>('jwt.secret') ?? 'default-secret';
        const expiresIn = configService.get<string>('jwt.expiresIn') ?? '7d';

        return {
          secret,
          signOptions: {
            expiresIn: expiresIn as StringValue,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}
