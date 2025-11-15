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
import { CreateMindcardAsyncUseCase } from 'src/modules/mindcard/useCases/createMindcardAsyncUseCase/createMindcardAsyncUseCase';
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
    private createMindcardAsyncUseCase: CreateMindcardAsyncUseCase,
    private findByIdMindcardUseCase: FindByIdMindcardUseCase,
    private findByUsuarioIdMindcardUseCase: FindByUsuarioIdMindcardUseCase,
    private updateMindcardByIdUseCase: UpdateMindcardByIdUseCase,
    private deleteMindcardByIdUseCase: DeleteMindcardByIdUseCase,
  ) {}

  /**
   * POST /mindcard/criar
   * Cria mindcard de forma assíncrona e retorna imediatamente com jobId
   * O processamento com IA acontece em background
   */
  @Post('criar')
  @UseInterceptors(FileInterceptor('fonteArquivo'))
  async createPost(
    @Body() body: CreateMindcardBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { titulo, promptPersonalizado, usuarioId, tipoGeracao } = body;

    const result = await this.createMindcardAsyncUseCase.execute({
      titulo,
      fonteArquivo: file,
      promptPersonalizado,
      usuarioId,
      tipoGeracao,
    });

    return {
      success: true,
      message: result.message,
      data: {
        mindcardId: result.mindcardId,
        jobId: result.jobId,
        status: result.status,
      },
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
