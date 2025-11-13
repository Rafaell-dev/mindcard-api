import { NotFoundException } from 'src/exceptions';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindByIdUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException();

    return user;
  }
}
