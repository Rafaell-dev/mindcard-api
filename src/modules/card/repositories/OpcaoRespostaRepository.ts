import type { OpcaoResposta } from '../entities/OpcaoResposta';

export abstract class OpcaoRespostaRepository {
  abstract create(opcaoResposta: OpcaoResposta): Promise<void>;
  abstract findById(id: string): Promise<OpcaoResposta | null>;
  abstract findByCardId(cardId: string): Promise<OpcaoResposta[]>;
  abstract deleteById(id: string): Promise<void>;
  abstract deleteByCardId(cardId: string): Promise<void>;
}
