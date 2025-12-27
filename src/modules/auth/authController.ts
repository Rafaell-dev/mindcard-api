import {
  Controller,
  Post,
  Get,
  Request,
  UseGuards,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import type { Response } from 'express';
import { AuthService, ValidatedUser } from './authService';
import { LocalAuthGuard, GoogleAuthGuard } from './guards';
import { AuthResponseDto, LoginDto } from './dtos';
import { CurrentUser } from './decorators';
import { IsPublic } from './decorators/isPublicDecorator';
import type { AuthenticatedUser } from './decorators';
import { User } from '../user/entities/User';

/**
 * Request com usuário validado (após login local)
 */
interface LocalAuthRequest {
  user: ValidatedUser;
}

/**
 * Request com usuário OAuth (após login Google)
 */
interface OAuthRequest {
  user: User;
}

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'Login com email e senha',
    description: 'Autentica o usuário com email e senha e retorna um token JWT',
  })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  login(@Request() req: LocalAuthRequest): AuthResponseDto {
    return this.authService.login(req.user);
  }

  @IsPublic()
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({
    summary: 'Iniciar login com Google',
    description:
      'Redireciona o usuário para a página de autenticação do Google',
  })
  @ApiResponse({ status: 302, description: 'Redirecionamento para o Google' })
  googleAuth() {
    // O guard redireciona para o Google automaticamente
  }

  @IsPublic()
  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({
    summary: 'Callback do Google OAuth',
    description:
      'Recebe o callback do Google e retorna o token JWT. O frontend deve capturar o token da URL.',
  })
  @ApiResponse({
    status: 200,
    description: 'Login via Google realizado com sucesso',
    type: AuthResponseDto,
  })
  googleAuthCallback(@Request() req: OAuthRequest, @Res() res: Response) {
    const authResponse = this.authService.login(req.user);

    // Redirect to frontend with token in query params
    // In production, use a more secure method like setting an httpOnly cookie
    const frontendUrl =
      process.env.FRONTEND_URL || 'http://localhost:3000/auth/callback';
    const redirectUrl = `${frontendUrl}?token=${authResponse.accessToken}`;

    return res.redirect(redirectUrl);
  }

  @Get('perfil')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Obter perfil do usuário autenticado',
    description: 'Retorna os dados do usuário autenticado via token JWT',
  })
  @ApiResponse({
    status: 200,
    description: 'Perfil do usuário',
  })
  @ApiResponse({ status: 401, description: 'Token inválido ou expirado' })
  getProfile(@CurrentUser() user: AuthenticatedUser): AuthenticatedUser {
    return user;
  }
}
