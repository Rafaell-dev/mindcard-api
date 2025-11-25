import { hash } from 'bcrypt';
import { UserRepository } from '../../repositories/UserRepository';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '../../entities/User';
import { FaculdadeRepository } from 'src/modules/faculdade/repositories/FaculdadeRepository';

interface UpdateUserRequest {
  id: string;
  data: {
    email?: string;
    nome?: string;
    senha?: string;
    faculdadeId?: string;
  };
}

@Injectable()
export class UpdateUserByIdUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly faculdadeRepository: FaculdadeRepository,
  ) {}

  async execute({ id, data }: UpdateUserRequest): Promise<User | null> {
    const user = await this.userRepository.findById(id);

    if (!data) {
      throw new NotFoundException('Dados inválidos!');
    }

    if (!user) throw new NotFoundException('Usuário não encontrado!');

    if (data.faculdadeId) {
      const faculdade = await this.faculdadeRepository.findById(
        data.faculdadeId,
      );

      if (!faculdade) throw new NotFoundException('Faculdade não encontrada');
    }

    if (data.email) {
      const userAlreadyExist = await this.userRepository.findByEmail(
        data.email,
      );

      if (userAlreadyExist && userAlreadyExist.id !== id)
        throw new ConflictException('Email já cadastrado!');
    }

    if (data.senha) {
      data.senha = await hash(data.senha, 10);
    }

    const updateDate = new Date();

    const updatedData = {
      ...user,
      ...data,
      updatedAt: updateDate,
    };

    const updatedUser = await this.userRepository.updateById(id, updatedData);

    return updatedUser;
  }
}
