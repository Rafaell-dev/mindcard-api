import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';
import { hash } from 'bcrypt';
import { UserWithSameEmailException } from '../../exceptions/UserWithSameEmailException';
import { FaculdadeRepository } from '../../../faculdade/repositories/FaculdadeRepository';
import { FaculdadeNotFoundException } from '../../../../exceptions/FaculdadeNotFoundException';

interface CreateUserRequest {
  email: string;
  nome: string;
  senha: string;
  faculdadeId?: string;
  idioma?: string;
}

@Injectable()
export class CreateUserUseCase {
  private readonly logger = new Logger(CreateUserUseCase.name);

  constructor(
    private userRepository: UserRepository,
    private faculdadeRepository: FaculdadeRepository,
  ) {}

  async execute({
    email,
    nome,
    senha,
    faculdadeId,
    idioma,
  }: CreateUserRequest) {
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) throw new UserWithSameEmailException();

    if (faculdadeId) {
      const faculdade = await this.faculdadeRepository.findById(faculdadeId);
      if (!faculdade) {
        throw new FaculdadeNotFoundException();
      }
    }

    const hashedPassword = await hash(senha, 10);

    const defaultNome = nome || email.split('@')[0];
    const totalUsers = await this.userRepository.countUsers();
    const usuario = `user_${totalUsers + 1}`;

    const user = new User({
      email,
      nome: defaultNome,
      usuario,
      senha: hashedPassword,
      faculdadeId: faculdadeId ?? undefined,
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
