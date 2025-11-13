import { compare } from 'bcrypt';
import { UserRepositoryInMemory } from '../../repositories/UserRepositoryInMemory';
import { UpdateUserByIdUseCase } from './updateUserByIdUseCase';
import { makeUser } from '../../factories/userFactory';
import { NotFoundException } from 'src/exceptions';
import { ConflictException } from 'src/exceptions/ConflictException';

let updateUserUseCase: UpdateUserByIdUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
describe('UpdateUserByIdUseCase', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    updateUserUseCase = new UpdateUserByIdUseCase(userRepositoryInMemory);
  });

  it('Should update user successfully', async () => {
    const user = makeUser({});
    userRepositoryInMemory.users = [user];

    await updateUserUseCase.execute({
      id: user.id,
      data: { nome: 'Updated Name' },
    });

    // Verifique se o usuário foi atualizado na memória
    expect(userRepositoryInMemory.users[0].nome).toBe('Updated Name');
  });

  it('Should throw an error when no data is provided', async () => {
    const user = makeUser({});
    userRepositoryInMemory.users = [user];

    await expect(
      updateUserUseCase.execute({
        id: user.id,
        data: undefined,
      }),
    ).rejects.toThrow(NotFoundException);

    await expect(
      updateUserUseCase.execute({
        id: user.id,
        data: undefined,
      }),
    ).rejects.toEqual(new NotFoundException());
  });

  it('Should throw an error when user is not found', async () => {
    await expect(
      updateUserUseCase.execute({
        id: 'nonexistent-id',
        data: { nome: 'Updated Name' },
      }),
    ).rejects.toThrow(NotFoundException);

    await expect(
      updateUserUseCase.execute({
        id: 'nonexistent-id',
        data: { nome: 'Updated Name' },
      }),
    ).rejects.toEqual(new NotFoundException());
  });

  it('Should throw an error when email already exists', async () => {
    const user1 = makeUser({ email: 'email1@example.com' });
    const user2 = makeUser({ email: 'email2@example.com' });
    userRepositoryInMemory.users = [user1, user2];

    await expect(
      updateUserUseCase.execute({
        id: user1.id,
        data: { email: user2.email },
      }),
    ).rejects.toEqual(new ConflictException());

    await expect(
      updateUserUseCase.execute({
        id: user1.id,
        data: { email: user2.email },
      }),
    ).rejects.toEqual(new ConflictException());
  });

  it('Should encrypt the password when updating', async () => {
    const user = makeUser({});
    userRepositoryInMemory.users = [user];

    const newPassword = 'newpassword123';

    await updateUserUseCase.execute({
      id: user.id,
      data: { senha: newPassword },
    });

    const isPasswordEncrypted = await compare(
      newPassword,
      userRepositoryInMemory.users[0].senha || '',
    );

    expect(isPasswordEncrypted).toBe(true);
  });
});
