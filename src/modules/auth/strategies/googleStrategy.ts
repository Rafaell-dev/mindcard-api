import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../authService';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: configService.get<string>('googleOAuth.clientId') ?? '',
      clientSecret: configService.get<string>('googleOAuth.clientSecret') ?? '',
      callbackURL:
        configService.get<string>('googleOAuth.callbackURL') ??
        'http://localhost:3002/api/v1/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<void> {
    const { id, displayName, emails, photos } = profile;

    const user = await this.authService.validateOAuthUser({
      email: emails?.[0]?.value || '',
      nome: displayName,
      googleId: id,
      avatarUrl: photos?.[0]?.value,
    });

    done(null, user);
  }
}
