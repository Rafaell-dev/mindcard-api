import { Mindcard, type MindcardProps } from '../entities/Mindcard';
import { MindcardRepository } from './MindcardRepository';

export class MindcardRepositoryInMemory implements MindcardRepository {
  public mindcards: Mindcard[] = [];

  create(mindcard: Mindcard): Promise<void> {
    this.mindcards.push(mindcard);
    return Promise.resolve();
  }

  findById(id: string): Promise<Mindcard | null> {
    const mindcard = this.mindcards.find((mindcard) => mindcard.id === id);
    return Promise.resolve(mindcard ?? null);
  }

  findByUsuarioId(usuarioId: string): Promise<Mindcard[]> {
    const mindcards = this.mindcards.filter(
      (mindcard) => mindcard.usuarioId === usuarioId,
    );
    return Promise.resolve(mindcards);
  }

  updateById(
    id: string,
    mindcard: Partial<MindcardProps>,
  ): Promise<Mindcard | null> {
    const mindcardIndex = this.mindcards.findIndex(
      (mindcard) => mindcard.id === id,
    );

    if (mindcardIndex === -1) {
      return Promise.resolve(null);
    }

    const currentMindcard = this.mindcards[mindcardIndex];
    const sanitizedUpdates = Object.entries(mindcard).reduce<
      Partial<MindcardProps>
    >((accumulator, [key, value]) => {
      if (value !== undefined) {
        (accumulator as Record<string, unknown>)[key] = value;
      }
      return accumulator;
    }, {});

    const updatedProps: MindcardProps = {
      id: currentMindcard.id,
      titulo: currentMindcard.titulo,
      fonteArquivo: currentMindcard.fonteArquivo,
      promptPersonalizado: currentMindcard.promptPersonalizado,
      usuarioId: currentMindcard.usuarioId,
      dataCriacao: currentMindcard.dataCriacao,
      ...sanitizedUpdates,
    };

    const updatedMindcard = new Mindcard(updatedProps);

    this.mindcards[mindcardIndex] = updatedMindcard;

    return Promise.resolve(updatedMindcard);
  }

  deleteById(id: string): Promise<void> {
    this.mindcards = this.mindcards.filter((mindcard) => mindcard.id !== id);
    return Promise.resolve();
  }
}
