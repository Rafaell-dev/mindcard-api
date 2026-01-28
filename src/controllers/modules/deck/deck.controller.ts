import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateDeckUseCase } from 'src/modules/deck/useCases/createDeckUseCase/CreateDeckUseCase';
import { CreateDeckDto } from './dto/CreateDeckDto';
import { DeckViewModel } from './viewModel/DeckViewModel';
import { CurrentUser } from 'src/modules/auth/decorators/currentUserDecorator';
import type { AuthenticatedUser } from 'src/modules/auth/decorators/currentUserDecorator';

@ApiTags('Deck')
@ApiBearerAuth()
@Controller('deck')
export class DeckController {
  constructor(private readonly createDeckUseCase: CreateDeckUseCase) {}

  @Post('/cadastrar')
  @ApiOperation({
    summary: 'Criar novo deck',
    description:
      'Cria um novo deck com pelo menos um flashcard associado ao usuário autenticado',
  })
  @ApiResponse({
    status: 201,
    description: 'Deck criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos ou deck sem flashcards',
  })
  @ApiResponse({
    status: 401,
    description: 'Usuário não autenticado',
  })
  async create(
    @CurrentUser() user: AuthenticatedUser,
    @Body() body: CreateDeckDto,
  ) {
    const deck = await this.createDeckUseCase.execute({
      titulo: body.titulo,
      usuarioId: user.userId,
      flashcards: body.flashcards,
    });

    return DeckViewModel.toHttp(deck);
  }
}
