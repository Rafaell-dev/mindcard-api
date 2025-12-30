import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';

/**
 * Use case para deletar um usuário seguindo as diretrizes da LGPD.
 *
 * De acordo com a LGPD (Lei Geral de Proteção de Dados), o titular dos dados
 * tem o direito de solicitar a eliminação de seus dados pessoais a qualquer momento.
 * Este use case implementa o direito de eliminação (Art. 18, VI).
 *
 * A deleção inclui:
 * - Todos os dados pessoais do usuário
 * - Mindcards criados pelo usuário
 * - Cards associados aos mindcards
 * - Histórico de práticas
 * - Respostas de onboarding
 */
@Injectable()
export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string): Promise<void> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.userRepository.delete(userId);
  }
}
