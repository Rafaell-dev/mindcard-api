import { User, type UserProps } from '../entities/User';
import { UserRepository } from './UserRepository';

export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = [];

  create(user: User): Promise<void> {
    this.users.push(user);
    return Promise.resolve();
  }

  findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);

    return Promise.resolve(user ?? null);
  }

  findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    return Promise.resolve(user ?? null);
  }

  updateById(id: string, user: Partial<UserProps>): Promise<User | null> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return Promise.resolve(null);
    }

    const currentUser = this.users[userIndex];
    const sanitizedUpdates = Object.entries(user).reduce<Partial<UserProps>>(
      (accumulator, [key, value]) => {
        if (value !== undefined) {
          (accumulator as Record<string, unknown>)[key] = value;
        }

        return accumulator;
      },
      {},
    );

    const updatedProps: UserProps = {
      id: currentUser.id,
      email: currentUser.email,
      senha: currentUser.senha,
      nome: currentUser.nome,
      faculdade: currentUser.faculdade,
      idioma: currentUser.idioma,
      dataRegistro: currentUser.dataRegistro,
      xpTotal: currentUser.xpTotal,
      sequenciaAtual: currentUser.sequenciaAtual,
      sequenciaRecorde: currentUser.sequenciaRecorde,
      ...sanitizedUpdates,
    };

    const updatedUser = new User(updatedProps);

    this.users[userIndex] = updatedUser;

    return Promise.resolve(updatedUser);
  }
}
