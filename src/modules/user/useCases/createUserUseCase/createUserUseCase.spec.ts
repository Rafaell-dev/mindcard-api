import { compare } from 'bcrypt';
import { UserRepositoryInMemory } from '../../repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './createUserUseCase';
import { UserWithSameEmailException } from '../../exceptions/UserWithSameEmailException';
import { User } from '../../entities/User';

type CreateUserRequest = Parameters<CreateUserUseCase['execute']>[0];

const makeCreateUserRequest = (
  override: Partial<CreateUserRequest> = {},
): CreateUserRequest => ({
  email: override.email ?? 'email@example.com',
  nome: override.nome ?? 'Fulano de Tal',
  senha: override.senha ?? '123123',
  faculdade: override.faculdade ?? 'Faculdade XPTO',
  idioma: override.idioma ?? 'pt-BR',
});

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('Should be able to create user', async () => {
    expect(userRepositoryInMemory.users).toEqual([]);

    const request = makeCreateUserRequest();

    const user = await createUserUseCase.execute(request);

    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('Should be able to create user with password encrypted', async () => {
    const userPasswordWithoutEncryption = '123123';

    const request = makeCreateUserRequest({
      senha: userPasswordWithoutEncryption,
    });

    const user = await createUserUseCase.execute(request);

    const userHasPasswordEncrypted = await compare(
      userPasswordWithoutEncryption,
      user.senha,
    );

    expect(userHasPasswordEncrypted).toBeTruthy();
  });

  it('Should be able to thorw error when create user with already exist email', async () => {
    const request = makeCreateUserRequest();

    const existingUser = new User({
      email: request.email,
      nome: request.nome,
      senha: request.senha,
      faculdade: request.faculdade ?? '',
      idioma: request.idioma ?? 'pt-BR',
      dataRegistro: new Date(),
      xpTotal: 0,
      sequenciaAtual: 0,
      sequenciaRecorde: 0,
    });

    userRepositoryInMemory.users = [existingUser];

    await expect(createUserUseCase.execute(request)).rejects.toThrow(
      UserWithSameEmailException,
    );
  });
});
