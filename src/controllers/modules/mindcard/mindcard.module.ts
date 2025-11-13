import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { R2Module } from 'src/r2/r2.module';
import { MindcardController } from './mindcard.controller';
import { CreateMindcardUseCase } from 'src/modules/mindcard/useCases/createMindcardUseCase/createMindcardUseCase';
import { CreateMindcardWithAiUseCase } from 'src/modules/mindcard/useCases/createMindcardWithAiUseCase/createMindcardWithAiUseCase';
import { UpdateMindcardByIdUseCase } from 'src/modules/mindcard/useCases/updateMindcardByIdUseCase/updateMindcardByIdUseCase';
import { FindByIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByIdMindcardUseCase/findByIdMindcardUseCase';
import { DeleteMindcardByIdUseCase } from 'src/modules/mindcard/useCases/deleteMindcardByIdUseCase/deleteMindcardByIdUseCase';
import { FindByUsuarioIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByUsuarioIdMindcardUseCase/findByUsuarioIdMindcardUseCase';

@Module({
  imports: [DatabaseModule, R2Module],
  controllers: [MindcardController],
  providers: [
    CreateMindcardUseCase,
    CreateMindcardWithAiUseCase,
    UpdateMindcardByIdUseCase,
    FindByIdMindcardUseCase,
    DeleteMindcardByIdUseCase,
    FindByUsuarioIdMindcardUseCase,
  ],
})
export class MindcardModule {}
