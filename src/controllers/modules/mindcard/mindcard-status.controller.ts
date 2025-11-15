import { Controller, Get, Param } from '@nestjs/common';
import { GetMindcardStatusUseCase } from '../../../modules/mindcard/useCases/getMindcardStatusUseCase/getMindcardStatusUseCase';
import { GetMindcardLogsUseCase } from '../../../modules/mindcard/useCases/getMindcardLogsUseCase/getMindcardLogsUseCase';

@Controller('mindcard')
export class MindcardStatusController {
  constructor(
    private readonly getMindcardStatusUseCase: GetMindcardStatusUseCase,
    private readonly getMindcardLogsUseCase: GetMindcardLogsUseCase,
  ) {}

  /**
   * GET /mindcard/status/:jobId
   * Retorna status de processamento de um job
   */
  @Get('status/:jobId')
  async getStatus(@Param('jobId') jobId: string) {
    const status = await this.getMindcardStatusUseCase.execute(jobId);

    return {
      success: true,
      data: status,
    };
  }

  /**
   * GET /mindcard/logs/:mindcardId
   * Retorna logs de processamento de um mindcard
   */
  @Get('logs/:mindcardId')
  async getLogs(@Param('mindcardId') mindcardId: string) {
    const logs = await this.getMindcardLogsUseCase.execute(mindcardId);

    return {
      success: true,
      data: logs,
    };
  }
}
