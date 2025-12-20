import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { User } from 'src/modules/user/entities/User';
import { JwtPayload, OAuthProfile } from './interfaces';
import { AuthResponseDto } from './dtos';

/**
 * Tipo do usuário validado sem a senha (por segurança)
 */
export type ValidatedUser = Omit<User, 'senha'>;

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  /**
   * Valida as credenciais do usuário (email e senha).
   * Retorna o usuário SEM a senha para evitar exposição acidental.
   *
   * @param email - Email do usuário
   * @param password - Senha em texto plano
   * @returns Usuário validado sem a senha, ou null se inválido
   */
  async validateUser(
    email: string,
    password: string,
  ): Promise<ValidatedUser | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !user.senha) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.senha);

    if (!isPasswordValid) {
      return null;
    }

    // Remove a senha antes de retornar o usuário (best practice)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senha, ...userWithoutPassword } = user;
    return userWithoutPassword as ValidatedUser;
  }

  /**
   * Gera um token JWT para o usuário autenticado.
   *
   * @param user - Usuário validado
   * @returns Resposta de autenticação com token e dados do usuário
   */
  login(user: ValidatedUser): AuthResponseDto {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        avatarUrl: user.avatarUrl,
      },
    };
  }

  /**
   * Valida ou cria um usuário via OAuth (Google).
   * Tenta encontrar por Google ID, depois por email para vincular contas,
   * e por último cria um novo usuário se não existir.
   *
   * @param profile - Perfil do OAuth com dados do Google
   * @returns Usuário existente ou recém-criado
   */
  async validateOAuthUser(profile: OAuthProfile): Promise<User> {
    // First, try to find user by Google ID
    let user = await this.userRepository.findByGoogleId(profile.googleId);

    if (user) {
      return user;
    }

    // If not found, try to find by email to link accounts
    user = await this.userRepository.findByEmail(profile.email);

    if (user) {
      // Link Google account to existing user
      await this.userRepository.updateById(user.id, {
        googleId: profile.googleId,
        avatarUrl: profile.avatarUrl,
      });

      // Return updated user
      user.googleId = profile.googleId;
      user.avatarUrl = profile.avatarUrl;
      return user;
    }

    // Create new user with OAuth
    const newUser = await this.userRepository.createOAuthUser(profile);
    return newUser;
  }
}
