import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_NAMES } from '../../../queue/queue.constants';
import { MindcardLogJobData } from '../../../queue/interfaces/job-data.interface';

/**
 * Processor simples para armazenar logs de processamento
 * Os logs são mantidos automaticamente pelo BullMQ conforme configuração
 */
@Processor(QUEUE_NAMES.MINDCARD_LOGS)
export class MindcardLogsProcessor extends WorkerHost {
  private readonly logger = new Logger(MindcardLogsProcessor.name);

  async process(job: Job<MindcardLogJobData>): Promise<void> {
    const { jobId, mindcardId, event, metadata, error } = job.data;

    // Aguardar um microtask para evitar warning
    await Promise.resolve();

    // Log para console/arquivo
    if (error) {
      this.logger.error(
        `[${mindcardId}] ${event} - Job: ${jobId} - Error: ${error}`,
        metadata,
      );
    } else {
      this.logger.log(`[${mindcardId}] ${event} - Job: ${jobId}`, metadata);
    }

    // Os logs ficam armazenados no Redis pelo BullMQ
    // Podem ser consultados depois via API
  }
}
