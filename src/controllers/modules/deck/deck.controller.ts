import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { CreateDeckUseCase } from 'src/modules/deck/useCases/createDeckUseCase/CreateDeckUseCase';
import { UpdateDeckUseCase } from 'src/modules/deck/useCases/updateDeckUseCase/UpdateDeckUseCase';
import { DeleteDeckUseCase } from 'src/modules/deck/useCases/deleteDeckUseCase/DeleteDeckUseCase';
import { ListDecksUseCase } from 'src/modules/deck/useCases/listDecksUseCase/ListDecksUseCase';
import { CreateDeckDto } from './dto/CreateDeckDto';
import { UpdateDeckDto } from './dto/UpdateDeckDto';
import { DeckViewModel } from './viewModel/DeckViewModel';
import { CurrentUser } from 'src/modules/auth/decorators/currentUserDecorator';
import type { AuthenticatedUser } from 'src/modules/auth/decorators/currentUserDecorator';

@ApiTags('Deck')
@ApiBearerAuth()
@Controller('deck')
export class DeckController {
  constructor(
    private readonly createDeckUseCase: CreateDeckUseCase,
    private readonly updateDeckUseCase: UpdateDeckUseCase,
    private readonly deleteDeckUseCase: DeleteDeckUseCase,
    private readonly listDecksUseCase: ListDecksUseCase,
  ) {}

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

  @Get('/listar')
  @ApiOperation({
    summary: 'Listar decks do usuário',
    description:
      'Retorna todos os decks do usuário autenticado com seus flashcards',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de decks retornada com sucesso',
  })
  async list(@CurrentUser() user: AuthenticatedUser) {
    const decks = await this.listDecksUseCase.execute(user.userId);

    return decks.map((deck) => DeckViewModel.toHttp(deck));
  }

  @Patch('/atualizar/:id')
  @ApiOperation({
    summary: 'Atualizar deck',
    description: 'Atualiza o título de um deck e/ou adiciona novos flashcards',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do deck',
    example: 'cm5abc123def456',
  })
  @ApiResponse({
    status: 200,
    description: 'Deck atualizado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Deck não encontrado',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  async update(@Param('id') id: string, @Body() body: UpdateDeckDto) {
    const deck = await this.updateDeckUseCase.execute({
      id,
      titulo: body.titulo,
      novosFlashcards: body.novosFlashcards,
    });

    return DeckViewModel.toHttp(deck);
  }

  @Delete('/deletar/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar deck',
    description: 'Remove permanentemente um deck e todos os seus flashcards',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do deck',
    example: 'cm5abc123def456',
  })
  @ApiResponse({
    status: 204,
    description: 'Deck removido com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Deck não encontrado',
  })
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteDeckUseCase.execute(id);
  }
}
