import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Dados do usuário autenticado extraídos do JWT
 */
export interface AuthenticatedUser {
  userId: string;
  email: string;
}

/**
 * Decorator customizado para extrair o usuário autenticado da requisição.
 *
 * @example
 * ```typescript
 * @Get('perfil')
 * @UseGuards(JwtAuthGuard)
 * getProfile(@CurrentUser() user: AuthenticatedUser) {
 *   return user;
 * }
 * ```
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AuthenticatedUser => {
    const request = ctx
      .switchToHttp()
      .getRequest<{ user: AuthenticatedUser }>();
    return request.user;
  },
);
