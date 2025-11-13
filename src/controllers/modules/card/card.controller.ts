import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateCardUseCase } from 'src/modules/card/useCases/createCardUseCase/createCardUseCase';
import { FindByIdCardUseCase } from 'src/modules/card/useCases/findByIdCardUseCase/findByIdCardUseCase';
import { FindByMindcardIdCardUseCase } from 'src/modules/card/useCases/findByMindcardIdCardUseCase/findByMindcardIdCardUseCase';
import { UpdateCardByIdUseCase } from 'src/modules/card/useCases/updateCardByIdUseCase/updateCardByIdUseCase';
import { DeleteCardByIdUseCase } from 'src/modules/card/useCases/deleteCardByIdUseCase/deleteCardByIdUseCase';
import { CreateCardBody } from './dtos/createCardBody';
import { UpdateCardBody } from './dtos/updateCardBody';
import { CardViewModel } from './viewModel/cardViewModel';

@Controller('card')
export class CardController {
  constructor(
    private createCardUseCase: CreateCardUseCase,
    private findByIdCardUseCase: FindByIdCardUseCase,
    private findByMindcardIdCardUseCase: FindByMindcardIdCardUseCase,
    private updateCardByIdUseCase: UpdateCardByIdUseCase,
    private deleteCardByIdUseCase: DeleteCardByIdUseCase,
  ) {}

  @Post('criar')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateCardBody) {
    const {
      titulo,
      tipo,
      dificuldade,
      pergunta,
      respostaCorreta,
      alternativaTexto,
      mindcardId,
    } = body;

    const card = await this.createCardUseCase.execute({
      titulo,
      tipo,
      dificuldade,
      pergunta,
      respostaCorreta,
      alternativaTexto,
      mindcardId,
    });

    return CardViewModel.toHttp(card);
  }

  @Get('listar/:cardId')
  async findById(@Param('cardId') cardId: string) {
    const card = await this.findByIdCardUseCase.execute(cardId);

    return CardViewModel.toHttp(card);
  }

  @Get('listar_por_mindcard/:mindcardId')
  async findByMindcardId(@Param('mindcardId') mindcardId: string) {
    const cards = await this.findByMindcardIdCardUseCase.execute(mindcardId);

    return cards.map((card) => CardViewModel.toHttp(card));
  }

  @Patch('atualizar/:cardId')
  async update(@Param('cardId') cardId: string, @Body() body: UpdateCardBody) {
    const card = await this.updateCardByIdUseCase.execute(cardId, body);

    return CardViewModel.toHttp(card);
  }

  @Delete('deletar/:cardId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('cardId') cardId: string) {
    await this.deleteCardByIdUseCase.execute(cardId);
  }
}
