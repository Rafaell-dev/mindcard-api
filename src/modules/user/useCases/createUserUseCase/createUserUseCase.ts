import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';
import { hash } from 'bcrypt';
import { UserWithSameEmailException } from '../../exceptions/UserWithSameEmailException';

interface CreateUserRequest {
  email: string;
  nome: string;
  senha: string;
  faculdade?: string;
  idioma?: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, nome, senha, faculdade, idioma }: CreateUserRequest) {
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) throw new UserWithSameEmailException();

    const hashedPassword = await hash(senha, 10);

    const user = new User({
      email,
      nome,
      senha: hashedPassword,
      faculdade: faculdade ?? '',
      idioma: idioma ?? 'pt-BR',
      dataRegistro: new Date(),
      xpTotal: 0,
      sequenciaAtual: 0,
      sequenciaRecorde: 0,
    });

    await this.userRepository.create(user);

    return user;
  }
}
