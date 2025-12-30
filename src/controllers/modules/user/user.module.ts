import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { UpdateUserByIdUseCase } from 'src/modules/user/useCases/updateUserUseCase/updateUserByIdUseCase';
import { FindByIdUserUseCase } from 'src/modules/user/useCases/findByIdUserUseCase/findByIdUserUseCase';
import { FindByEmailUserUseCase } from 'src/modules/user/useCases/findByEmailUserUseCase/findByEmailUserUseCase';
import { DeleteUserUseCase } from 'src/modules/user/useCases/deleteUserUseCase/deleteUserUseCase';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    UpdateUserByIdUseCase,
    FindByIdUserUseCase,
    FindByEmailUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UserModule {}
