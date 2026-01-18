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
import { CreateItemMindcardUseCase } from 'src/modules/itemMindcard/useCases/createItemMindcardUseCase/createItemMindcardUseCase';
import { FindByIdItemMindcardUseCase } from 'src/modules/itemMindcard/useCases/findByIdItemMindcardUseCase/findByIdItemMindcardUseCase';
import { FindByMindcardIdItemMindcardUseCase } from 'src/modules/itemMindcard/useCases/findByMindcardIdItemMindcardUseCase/findByMindcardIdItemMindcardUseCase';
import { UpdateItemMindcardByIdUseCase } from 'src/modules/itemMindcard/useCases/updateItemMindcardByIdUseCase/updateItemMindcardByIdUseCase';
import { DeleteItemMindcardByIdUseCase } from 'src/modules/itemMindcard/useCases/deleteItemMindcardByIdUseCase/deleteItemMindcardByIdUseCase';
import { CreateItemMindcardBody } from './dtos/createItemMindcardBody';
import { UpdateItemMindcardBody } from './dtos/updateItemMindcardBody';
import { ItemMindcardViewModel } from './viewModel/itemMindcardViewModel';

@Controller('item-mindcard')
export class ItemMindcardController {
  constructor(
    private createItemMindcardUseCase: CreateItemMindcardUseCase,
    private findByIdItemMindcardUseCase: FindByIdItemMindcardUseCase,
    private findByMindcardIdItemMindcardUseCase: FindByMindcardIdItemMindcardUseCase,
    private updateItemMindcardByIdUseCase: UpdateItemMindcardByIdUseCase,
    private deleteItemMindcardByIdUseCase: DeleteItemMindcardByIdUseCase,
  ) {}

  @Post('criar')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateItemMindcardBody) {
    const {
      titulo,
      tipo,
      dificuldade,
      pergunta,
      respostaCorreta,
      alternativaTexto,
      mindcardId,
    } = body;

    const itemMindcard = await this.createItemMindcardUseCase.execute({
      titulo,
      tipo,
      dificuldade,
      pergunta,
      respostaCorreta,
      alternativaTexto,
      mindcardId,
    });

    return ItemMindcardViewModel.toHttp(itemMindcard);
  }

  @Get('listar/:itemMindcardId')
  async findById(@Param('itemMindcardId') itemMindcardId: string) {
    const itemMindcard =
      await this.findByIdItemMindcardUseCase.execute(itemMindcardId);

    return ItemMindcardViewModel.toHttp(itemMindcard);
  }

  @Get('listar_por_mindcard/:mindcardId')
  async findByMindcardId(@Param('mindcardId') mindcardId: string) {
    const itensMindcard =
      await this.findByMindcardIdItemMindcardUseCase.execute(mindcardId);

    return itensMindcard.map((item) => ItemMindcardViewModel.toHttp(item));
  }

  @Patch('atualizar/:itemMindcardId')
  async update(
    @Param('itemMindcardId') itemMindcardId: string,
    @Body() body: UpdateItemMindcardBody,
  ) {
    const itemMindcard = await this.updateItemMindcardByIdUseCase.execute(
      itemMindcardId,
      body,
    );

    return ItemMindcardViewModel.toHttp(itemMindcard);
  }

  @Delete('deletar/:itemMindcardId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('itemMindcardId') itemMindcardId: string) {
    await this.deleteItemMindcardByIdUseCase.execute(itemMindcardId);
  }
}
