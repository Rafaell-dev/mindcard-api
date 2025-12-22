import { ApiProperty } from '@nestjs/swagger';

class UserResponse {
  @ApiProperty({ description: 'ID do usuário' })
  id: string;

  @ApiProperty({ description: 'Nome do usuário' })
  nome: string;

  @ApiProperty({ description: 'Email do usuário' })
  email: string;

  @ApiProperty({ description: 'URL do avatar', required: false })
  avatarUrl?: string;
}

export class AuthResponseDto {
  @ApiProperty({ description: 'Token JWT de acesso' })
  accessToken: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
    type: UserResponse,
  })
  user: UserResponse;
}
