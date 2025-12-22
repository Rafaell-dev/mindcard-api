import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService, ValidatedUser } from '../authService';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
  }

  /**
   * Valida as credenciais do usuário.
   * Este método é chamado automaticamente pelo Passport após extrair email/senha.
   *
   * @param email - Email do usuário
   * @param senha - Senha em texto plano
   * @returns Usuário validado (sem senha)
   * @throws UnauthorizedException se credenciais inválidas
   */
  async validate(email: string, senha: string): Promise<ValidatedUser> {
    const user = await this.authService.validateUser(email, senha);

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    return user;
  }
}
