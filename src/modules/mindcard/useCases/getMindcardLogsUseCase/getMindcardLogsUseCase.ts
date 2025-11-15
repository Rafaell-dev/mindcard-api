import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { QUEUE_NAMES } from '../../../../queue/queue.constants';
import {
  JobLogsResponse,
  JobLogEntry,
} from '../../../../queue/interfaces/job-status.interface';
import { MindcardRepository } from '../../repositories/MindcardRepository';

/**
 * Use case para buscar logs de processamento de um mindcard
 */
@Injectable()
export class GetMindcardLogsUseCase {
  constructor(
    @InjectQueue(QUEUE_NAMES.MINDCARD_LOGS)
    private readonly logsQueue: Queue,
    private readonly mindcardRepository: MindcardRepository,
  ) {}

  async execute(mindcardId: string): Promise<JobLogsResponse> {
    // Verificar se mindcard existe
    const mindcard = await this.mindcardRepository.findById(mindcardId);

    if (!mindcard) {
      throw new NotFoundException(`Mindcard ${mindcardId} não encontrado`);
    }

    // Buscar jobs completados e falhados da fila de logs
    const completedJobs = await this.logsQueue.getCompleted(0, 1000);
    const failedJobs = await this.logsQueue.getFailed(0, 1000);

    const allJobs = [...completedJobs, ...failedJobs];

    // Filtrar logs relacionados ao mindcardId
    const logs: JobLogEntry[] = [];

    for (const job of allJobs) {
      if (job.data.mindcardId === mindcardId) {
        logs.push({
          id: job.id!,
          jobId: job.data.jobId,
          mindcardId: job.data.mindcardId,
          event: job.data.event,
          timestamp: new Date(job.data.timestamp),
          metadata: job.data.metadata,
          error: job.data.error,
        });
      }
    }

    // Ordenar por timestamp
    logs.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

    return {
      mindcardId,
      totalLogs: logs.length,
      logs,
    };
  }
}
