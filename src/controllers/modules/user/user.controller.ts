import {
  Body,
  Controller,
  Post,
  Patch,
  Get,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { IsPublic } from 'src/modules/auth/decorators/isPublicDecorator';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { CreateUserBody } from './dtos/createUserBody';
import { UserViewModel } from './viewModel/userViewModel';
import { UpdateUserByIdUseCase } from 'src/modules/user/useCases/updateUserUseCase/updateUserByIdUseCase';
import { FindByIdUserUseCase } from 'src/modules/user/useCases/findByIdUserUseCase/findByIdUserUseCase';
import { DeleteUserUseCase } from 'src/modules/user/useCases/deleteUserUseCase/deleteUserUseCase';
import { UpdateUserRequest } from './dtos/updateUserBody';

@ApiTags('Usuário')
@Controller('usuario')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private updateUserByIdUseCase: UpdateUserByIdUseCase,
    private findUserByIdUseCase: FindByIdUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @IsPublic()
  @Post('cadastrar')
  @ApiOperation({
    summary: 'Cadastrar novo usuário',
    description:
      'Cria um novo usuário no sistema com email, nome, senha, faculdade e idioma',
  })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 409, description: 'Email já cadastrado' })
  async createPost(@Body() body: CreateUserBody) {
    const { email, nome, senha, faculdadeId, idioma } = body;

    const user = await this.createUserUseCase.execute({
      email,
      nome,
      senha,
      faculdadeId,
      idioma,
    });

    return UserViewModel.toHttp(user);
  }

  @Get('listar/:userId')
  @ApiOperation({
    summary: 'Buscar usuário por ID',
    description: 'Retorna os dados de um usuário específico pelo ID',
  })
  @ApiParam({
    name: 'userId',
    description: 'ID do usuário (UUID v7)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @ApiResponse({ status: 200, description: 'Usuário encontrado' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async listGet(@Param('userId') userId: string) {
    const user = await this.findUserByIdUseCase.execute(userId);

    return UserViewModel.toHttp(user);
  }

  @Get('listar_por_email/:email')
  @ApiOperation({
    summary: 'Buscar usuário por email',
    description: 'Retorna os dados de um usuário específico pelo email',
  })
  @ApiParam({
    name: 'email',
    description: 'Email do usuário',
    example: 'usuario@exemplo.com',
  })
  @ApiResponse({ status: 200, description: 'Usuário encontrado' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async listByEmailGet(@Param('email') email: string) {
    const user = await this.findUserByIdUseCase.execute(email);

    return UserViewModel.toHttp(user);
  }

  @Patch('atualizar/:userId')
  @ApiOperation({
    summary: 'Atualizar usuário',
    description: 'Atualiza os dados de um usuário existente',
  })
  @ApiParam({
    name: 'userId',
    description: 'ID do usuário (UUID v7)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async updatePatch(
    @Param('userId') userId: string,
    @Body() body: UpdateUserRequest,
  ) {
    const updatedUser = await this.updateUserByIdUseCase.execute({
      id: userId,
      data: {
        email: body.email,
        nome: body.nome,
        senha: body.senha,
        faculdadeId: body.faculdadeId,
      },
    });

    if (updatedUser) {
      return UserViewModel.toHttp(updatedUser);
    }
  }

  @Delete('deletar/:userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar usuário (LGPD)',
    description:
      'Remove permanentemente um usuário e todos os seus dados pessoais do sistema. ' +
      'Esta operação não pode ser desfeita e está em conformidade com o Art. 18, VI da LGPD ' +
      '(direito de eliminação dos dados pessoais). Todos os mindcards, cards, práticas ' +
      'e demais dados associados ao usuário serão removidos.',
  })
  @ApiParam({
    name: 'userId',
    description: 'ID do usuário a ser deletado (UUID v7)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @ApiResponse({
    status: 204,
    description: 'Usuário e todos os seus dados foram removidos com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    await this.deleteUserUseCase.execute(userId);
  }
}
