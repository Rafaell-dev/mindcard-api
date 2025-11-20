import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { GetMindcardStatusUseCase } from '../../../modules/mindcard/useCases/getMindcardStatusUseCase/getMindcardStatusUseCase';
import { GetMindcardLogsUseCase } from '../../../modules/mindcard/useCases/getMindcardLogsUseCase/getMindcardLogsUseCase';

@ApiTags('Status')
@Controller('mindcard')
export class MindcardStatusController {
  constructor(
    private readonly getMindcardStatusUseCase: GetMindcardStatusUseCase,
    private readonly getMindcardLogsUseCase: GetMindcardLogsUseCase,
  ) {}

  @Get('status/:jobId')
  @ApiOperation({
    summary: 'Verificar status de processamento',
    description:
      'Retorna o status atual de um job de processamento assíncrono. ' +
      'Use o jobId retornado ao criar um mindcard para monitorar o progresso (0-100%).',
  })
  @ApiParam({
    name: 'jobId',
    description: 'ID do job retornado ao criar mindcard',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Status do job',
    schema: {
      example: {
        success: true,
        data: {
          jobId: '1',
          mindcardId: '019a8588-9582-72f8-ac5e-231e942f52d9',
          status: 'PROCESSANDO',
          progress: 45,
          message: 'Processando com IA...',
          createdAt: '2025-11-15T00:20:00.000Z',
          updatedAt: '2025-11-15T00:20:45.000Z',
        },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Job não encontrado' })
  async getStatus(@Param('jobId') jobId: string) {
    const status = await this.getMindcardStatusUseCase.execute(jobId);

    return {
      success: true,
      data: status,
    };
  }

  @Get('logs/:mindcardId')
  @ApiOperation({
    summary: 'Obter logs de processamento',
    description:
      'Retorna todos os logs de eventos durante o processamento de um mindcard. ' +
      'Útil para debug e auditoria.',
  })
  @ApiParam({
    name: 'mindcardId',
    description: 'ID do mindcard (UUID v7)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de logs',
    schema: {
      example: {
        success: true,
        data: [
          {
            event: 'JOB_STARTED',
            timestamp: '2025-11-15T00:20:00.000Z',
            metadata: { userId: '8c40...', tipoGeracao: 'FLASHCARDS' },
          },
          {
            event: 'FILE_VALIDATED',
            timestamp: '2025-11-15T00:20:10.000Z',
            metadata: { fileSize: 2601162, mimeType: 'application/pdf' },
          },
          {
            event: 'GEMINI_REQUEST_SENT',
            timestamp: '2025-11-15T00:20:15.000Z',
            metadata: { fileSize: 2601162 },
          },
          {
            event: 'JOB_COMPLETED',
            timestamp: '2025-11-15T00:22:00.000Z',
            metadata: { cardsGenerated: 10, duration: 120000 },
          },
        ],
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Mindcard não encontrado' })
  async getLogs(@Param('mindcardId') mindcardId: string) {
    const logs = await this.getMindcardLogsUseCase.execute(mindcardId);

    return {
      success: true,
      data: logs,
    };
  }
}
