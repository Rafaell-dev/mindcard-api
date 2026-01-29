import {
  Controller,
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
import { UpdateFlashcardUseCase } from 'src/modules/deck/useCases/updateFlashcardUseCase/UpdateFlashcardUseCase';
import { DeleteFlashcardUseCase } from 'src/modules/deck/useCases/deleteFlashcardUseCase/DeleteFlashcardUseCase';
import { UpdateFlashcardDto } from './dto/UpdateFlashcardDto';
import { FlashcardViewModel } from './viewModel/FlashcardViewModel';

@ApiTags('Flashcard')
@ApiBearerAuth()
@Controller('flashcard')
export class FlashcardController {
  constructor(
    private readonly updateFlashcardUseCase: UpdateFlashcardUseCase,
    private readonly deleteFlashcardUseCase: DeleteFlashcardUseCase,
  ) {}

  @Patch('/atualizar/:id')
  @ApiOperation({
    summary: 'Atualizar flashcard',
    description: 'Atualiza a pergunta e/ou resposta de um flashcard existente',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do flashcard',
    example: 'cm5abc123def456',
  })
  @ApiResponse({
    status: 200,
    description: 'Flashcard atualizado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Flashcard não encontrado',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  async update(@Param('id') id: string, @Body() body: UpdateFlashcardDto) {
    const flashcard = await this.updateFlashcardUseCase.execute({
      id,
      data: {
        pergunta: body.pergunta,
        resposta: body.resposta,
      },
    });

    return FlashcardViewModel.toHttp(flashcard);
  }

  @Delete('/deletar/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar flashcard',
    description: 'Remove permanentemente um flashcard',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do flashcard',
    example: 'cm5abc123def456',
  })
  @ApiResponse({
    status: 204,
    description: 'Flashcard removido com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Flashcard não encontrado',
  })
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteFlashcardUseCase.execute(id);
  }
}
