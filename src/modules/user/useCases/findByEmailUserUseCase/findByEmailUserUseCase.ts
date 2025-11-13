import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';
import { Injectable } from '@nestjs/common';
import { NotFoundException } from 'src/exceptions';

@Injectable()
export class FindByEmailUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new NotFoundException();

    return user;
  }
}
