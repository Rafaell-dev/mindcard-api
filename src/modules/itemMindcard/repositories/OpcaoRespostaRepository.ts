import { OpcaoResposta } from '../entities/OpcaoResposta';

export abstract class OpcaoRespostaRepository {
  abstract create(opcaoResposta: OpcaoResposta): Promise<void>;
  abstract findById(id: string): Promise<OpcaoResposta | null>;
  abstract findByItemMindcardId(
    itemMindcardId: string,
  ): Promise<OpcaoResposta[]>;
  abstract deleteById(id: string): Promise<void>;
  abstract deleteByItemMindcardId(itemMindcardId: string): Promise<void>;
}
