import { Mindcard, type MindcardProps } from '../entities/Mindcard';
import { StatusProcessamento } from '../../../queue/interfaces/job-data.interface';

export abstract class MindcardRepository {
  abstract create(mindcard: Mindcard): Promise<void>;
  abstract findById(id: string): Promise<Mindcard | null>;
  abstract findByUsuarioId(usuarioId: string): Promise<Mindcard[]>;
  abstract updateById(
    id: string,
    mindcard: Partial<MindcardProps>,
  ): Promise<Mindcard | null>;
  abstract deleteById(id: string): Promise<void>;
  abstract updateStatus(
    id: string,
    status: StatusProcessamento,
    iniciadoEm?: Date,
    concluidoEm?: Date,
    mensagemErro?: string,
  ): Promise<void>;
  abstract findByJobId(jobId: string): Promise<Mindcard | null>;
}
