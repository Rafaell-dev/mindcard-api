import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { QUEUE_NAMES } from '../../../../queue/queue.constants';
import { JobStatusResponse } from '../../../../queue/interfaces/job-status.interface';
import { StatusProcessamento } from '../../../../queue/interfaces/job-data.interface';
import { MindcardRepository } from '../../repositories/MindcardRepository';

/**
 * Use case para buscar status de processamento de um job
 */
@Injectable()
export class GetMindcardStatusUseCase {
  constructor(
    @InjectQueue(QUEUE_NAMES.MINDCARD_GENERATION)
    private readonly queue: Queue,
    private readonly mindcardRepository: MindcardRepository,
  ) {}

  async execute(jobId: string): Promise<JobStatusResponse> {
    // Buscar job na fila
    const job = await this.queue.getJob(jobId);

    if (!job) {
      throw new NotFoundException(`Job ${jobId} não encontrado`);
    }

    // Buscar mindcard associado
    const mindcard = await this.mindcardRepository.findByJobId(jobId);

    if (!mindcard) {
      throw new NotFoundException(`Mindcard para job ${jobId} não encontrado`);
    }

    // Determinar status do job
    const state = await job.getState();
    let status: StatusProcessamento;

    switch (state) {
      case 'waiting':
      case 'delayed':
        status = StatusProcessamento.PENDENTE;
        break;
      case 'active':
        status = StatusProcessamento.PROCESSANDO;
        break;
      case 'completed':
        status = StatusProcessamento.CONCLUIDO;
        break;
      case 'failed':
        status = StatusProcessamento.FALHOU;
        break;
      default:
        status = StatusProcessamento.PENDENTE;
    }

    // Obter progresso
    const progress = (job.progress as number) || 0;

    // Calcular tempo estimado (baseado no progresso atual)
    let estimatedTimeRemaining: number | undefined;
    if (status === StatusProcessamento.PROCESSANDO && progress > 0) {
      const elapsedTime = Date.now() - job.timestamp;
      const totalEstimatedTime = (elapsedTime / progress) * 100;
      estimatedTimeRemaining = Math.ceil(
        (totalEstimatedTime - elapsedTime) / 1000,
      );
    }

    // Obter informações de erro se falhou
    let error: string | undefined;
    if (state === 'failed' && job.failedReason) {
      error = job.failedReason;
    }

    return {
      jobId: job.id!,
      mindcardId: mindcard.id,
      status,
      progress,
      estimatedTimeRemaining,
      error,
      createdAt: new Date(job.timestamp),
      startedAt: job.processedOn ? new Date(job.processedOn) : undefined,
      completedAt: job.finishedOn ? new Date(job.finishedOn) : undefined,
      failedAt:
        job.finishedOn && state === 'failed'
          ? new Date(job.finishedOn)
          : undefined,
      attempts: job.attemptsMade,
      maxAttempts: job.opts.attempts || 3,
    };
  }
}
