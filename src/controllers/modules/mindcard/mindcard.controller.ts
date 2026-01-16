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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiConsumes,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMindcardAsyncUseCase } from 'src/modules/mindcard/useCases/createMindcardAsyncUseCase/createMindcardAsyncUseCase';
import { FindByIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByIdMindcardUseCase/findByIdMindcardUseCase';
import { FindByUsuarioIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByUsuarioIdMindcardUseCase/findByUsuarioIdMindcardUseCase';
import { UpdateMindcardByIdUseCase } from 'src/modules/mindcard/useCases/updateMindcardByIdUseCase/updateMindcardByIdUseCase';
import { DeleteMindcardByIdUseCase } from 'src/modules/mindcard/useCases/deleteMindcardByIdUseCase/deleteMindcardByIdUseCase';
import { CreateMindcardBody } from './dtos/createMindcardBody';
import { UpdateMindcardBody } from './dtos/updateMindcardBody';
import { MindcardViewModel } from './viewModel/mindcardViewModel';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards';
import {
  CurrentUser,
  type AuthenticatedUser,
} from 'src/modules/auth/decorators/currentUserDecorator';

@ApiTags('Mindcard')
@Controller('mindcard')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MindcardController {
  constructor(
    private createMindcardAsyncUseCase: CreateMindcardAsyncUseCase,
    private findByIdMindcardUseCase: FindByIdMindcardUseCase,
    private findByUsuarioIdMindcardUseCase: FindByUsuarioIdMindcardUseCase,
    private updateMindcardByIdUseCase: UpdateMindcardByIdUseCase,
    private deleteMindcardByIdUseCase: DeleteMindcardByIdUseCase,
  ) {}

  @Post('criar')
  @ApiOperation({
    summary: 'Criar mindcard com IA (assíncrono)',
    description:
      'Cria um mindcard e processa com IA em background. Retorna imediatamente com jobId para monitoramento. ' +
      'Aceita arquivos PDF, PNG, JPG, JPEG, GIF e WEBP (até 50MB). ' +
      'O processamento gera flashcards ou quiz usando Gemini AI.',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Dados do mindcard e arquivo fonte',
    schema: {
      type: 'object',
      required: ['titulo', 'tipoQuestoes', 'fonteArquivo'],
      properties: {
        titulo: {
          type: 'string',
          example: 'Matemática - Álgebra Linear',
          description: 'Título do mindcard',
        },
        tipoQuestoes: {
          type: 'string',
          enum: ['Alternativa', 'Múltipla escolha'],
          example: 'Alternativa',
          description: 'Tipo de questões a serem geradas',
        },
        intervaloPaginas: {
          type: 'string',
          example: '1-10',
          description: 'Intervalo de páginas para focar a geração (opcional)',
          nullable: true,
        },
        promptPersonalizado: {
          type: 'string',
          example: 'Foque em conceitos básicos para iniciantes',
          description: 'Prompt personalizado para a IA (opcional)',
          nullable: true,
        },
        fonteArquivo: {
          type: 'string',
          format: 'binary',
          description: 'Arquivo fonte (PDF ou imagem)',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Mindcard criado e job iniciado',
    schema: {
      example: {
        success: true,
        message:
          'Mindcard criado com sucesso. O processamento será feito em background.',
        data: {
          mindcardId: '019a8588-9582-72f8-ac5e-231e942f52d9',
          jobId: '1',
          status: 'PROCESSING',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Arquivo inválido ou dados incorretos',
  })
  @ApiResponse({ status: 413, description: 'Arquivo muito grande (máx 50MB)' })
  @UseInterceptors(FileInterceptor('fonteArquivo'))
  async createPost(
    @Body() body: CreateMindcardBody,
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const { titulo, promptPersonalizado, intervaloPaginas, tipoQuestoes } =
      body;

    const result = await this.createMindcardAsyncUseCase.execute({
      titulo,
      fonteArquivo: file,
      promptPersonalizado,
      usuarioId: user.userId,
      intervaloPaginas,
      tipoQuestoes,
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
  @ApiOperation({
    summary: 'Buscar mindcard por ID',
    description: 'Retorna os detalhes de um mindcard específico',
  })
  @ApiParam({
    name: 'mindcardId',
    description: 'ID do mindcard (UUID v7)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @ApiResponse({ status: 200, description: 'Mindcard encontrado' })
  @ApiResponse({ status: 404, description: 'Mindcard não encontrado' })
  async listGet(@Param('mindcardId') mindcardId: string) {
    const mindcard = await this.findByIdMindcardUseCase.execute(mindcardId);

    return MindcardViewModel.toHttp(mindcard);
  }

  @Get('listar_por_usuario/:usuarioId')
  @ApiOperation({
    summary: 'Listar mindcards por usuário',
    description: 'Retorna todos os mindcards de um usuário específico',
  })
  @ApiParam({
    name: 'usuarioId',
    description: 'ID do usuário (UUID v7)',
    example: '8c40a29b-04f4-4960-965d-9e741f66288f',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de mindcards',
    isArray: true,
  })
  async listByUsuarioGet(@Param('usuarioId') usuarioId: string) {
    const mindcards =
      await this.findByUsuarioIdMindcardUseCase.execute(usuarioId);

    return mindcards.map((mindcard) => MindcardViewModel.toHttp(mindcard));
  }

  @Patch('atualizar/:mindcardId')
  @ApiOperation({
    summary: 'Atualizar mindcard',
    description: 'Atualiza os dados de um mindcard existente',
  })
  @ApiConsumes('multipart/form-data')
  @ApiParam({
    name: 'mindcardId',
    description: 'ID do mindcard (UUID v7)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @ApiResponse({ status: 200, description: 'Mindcard atualizado' })
  @ApiResponse({ status: 404, description: 'Mindcard não encontrado' })
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
  @ApiOperation({
    summary: 'Deletar mindcard',
    description: 'Remove um mindcard e todos os seus cards associados',
  })
  @ApiParam({
    name: 'mindcardId',
    description: 'ID do mindcard (UUID v7)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @ApiResponse({ status: 200, description: 'Mindcard deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Mindcard não encontrado' })
  async deleteDelete(@Param('mindcardId') mindcardId: string) {
    await this.deleteMindcardByIdUseCase.execute(mindcardId);

    return { message: 'Mindcard deletado com sucesso' };
  }
}
