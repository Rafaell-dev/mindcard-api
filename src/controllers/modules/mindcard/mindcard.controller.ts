import {
  Body,
  Controller,
  Post,
  Patch,
  Get,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMindcardWithAiUseCase } from 'src/modules/mindcard/useCases/createMindcardWithAiUseCase/createMindcardWithAiUseCase';
import { FindByIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByIdMindcardUseCase/findByIdMindcardUseCase';
import { FindByUsuarioIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByUsuarioIdMindcardUseCase/findByUsuarioIdMindcardUseCase';
import { UpdateMindcardByIdUseCase } from 'src/modules/mindcard/useCases/updateMindcardByIdUseCase/updateMindcardByIdUseCase';
import { DeleteMindcardByIdUseCase } from 'src/modules/mindcard/useCases/deleteMindcardByIdUseCase/deleteMindcardByIdUseCase';
import { CreateMindcardBody } from './dtos/createMindcardBody';
import { UpdateMindcardBody } from './dtos/updateMindcardBody';
import { MindcardViewModel } from './viewModel/mindcardViewModel';

@Controller('mindcard')
export class MindcardController {
  constructor(
    private createMindcardWithAiUseCase: CreateMindcardWithAiUseCase,
    private findByIdMindcardUseCase: FindByIdMindcardUseCase,
    private findByUsuarioIdMindcardUseCase: FindByUsuarioIdMindcardUseCase,
    private updateMindcardByIdUseCase: UpdateMindcardByIdUseCase,
    private deleteMindcardByIdUseCase: DeleteMindcardByIdUseCase,
  ) {}

  @Post('criar')
  @UseInterceptors(FileInterceptor('fonteArquivo'))
  async createPost(
    @Body() body: CreateMindcardBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { titulo, promptPersonalizado, usuarioId, tipoGeracao } = body;

    const result = await this.createMindcardWithAiUseCase.execute({
      titulo,
      fonteArquivo: file,
      promptPersonalizado,
      usuarioId,
      tipoGeracao,
    });

    return {
      mindcard: MindcardViewModel.toHttp(result.mindcard),
      totalCardsGenerated: result.totalGenerated,
    };
  }

  @Get('listar/:mindcardId')
  async listGet(@Param('mindcardId') mindcardId: string) {
    const mindcard = await this.findByIdMindcardUseCase.execute(mindcardId);

    return MindcardViewModel.toHttp(mindcard);
  }

  @Get('listar_por_usuario/:usuarioId')
  async listByUsuarioGet(@Param('usuarioId') usuarioId: string) {
    const mindcards =
      await this.findByUsuarioIdMindcardUseCase.execute(usuarioId);

    return mindcards.map((mindcard) => MindcardViewModel.toHttp(mindcard));
  }

  @Patch('atualizar/:mindcardId')
  @UseInterceptors(FileInterceptor('fonteArquivo'))
  async updatePatch(
    @Param('mindcardId') mindcardId: string,
    @Body() body: UpdateMindcardBody,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const updatedMindcard = await this.updateMindcardByIdUseCase.execute({
      id: mindcardId,
      data: {
        titulo: body.titulo,
        fonteArquivo: file,
        promptPersonalizado: body.promptPersonalizado,
      },
    });

    if (updatedMindcard) {
      return MindcardViewModel.toHttp(updatedMindcard);
    }
  }

  @Delete('deletar/:mindcardId')
  async deleteDelete(@Param('mindcardId') mindcardId: string) {
    await this.deleteMindcardByIdUseCase.execute(mindcardId);

    return { message: 'Mindcard deletado com sucesso' };
  }
}
