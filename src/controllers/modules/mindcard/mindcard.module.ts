import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { DatabaseModule } from 'src/database/database.module';
import { R2Module } from 'src/r2/r2.module';
import { QueueModule } from 'src/queue/queue.module';
import { QUEUE_NAMES } from 'src/queue/queue.constants';
import { MindcardController } from './mindcard.controller';
import { MindcardStatusController } from './mindcard-status.controller';
import { CreateMindcardUseCase } from 'src/modules/mindcard/useCases/createMindcardUseCase/createMindcardUseCase';
import { CreateMindcardWithAiUseCase } from 'src/modules/mindcard/useCases/createMindcardWithAiUseCase/createMindcardWithAiUseCase';
import { CreateMindcardAsyncUseCase } from 'src/modules/mindcard/useCases/createMindcardAsyncUseCase/createMindcardAsyncUseCase';
import { UpdateMindcardByIdUseCase } from 'src/modules/mindcard/useCases/updateMindcardByIdUseCase/updateMindcardByIdUseCase';
import { FindByIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByIdMindcardUseCase/findByIdMindcardUseCase';
import { DeleteMindcardByIdUseCase } from 'src/modules/mindcard/useCases/deleteMindcardByIdUseCase/deleteMindcardByIdUseCase';
import { FindByUsuarioIdMindcardUseCase } from 'src/modules/mindcard/useCases/findByUsuarioIdMindcardUseCase/findByUsuarioIdMindcardUseCase';
import { GetMindcardStatusUseCase } from 'src/modules/mindcard/useCases/getMindcardStatusUseCase/getMindcardStatusUseCase';
import { GetMindcardLogsUseCase } from 'src/modules/mindcard/useCases/getMindcardLogsUseCase/getMindcardLogsUseCase';
import { MindcardGenerationProcessor } from 'src/modules/mindcard/processors/mindcard-generation.processor';
import { MindcardLogsProcessor } from 'src/modules/mindcard/processors/mindcard-logs.processor';

@Module({
  imports: [
    DatabaseModule,
    R2Module,
    QueueModule,
    // Registrar filas para injeção
    BullModule.registerQueue(
      { name: QUEUE_NAMES.MINDCARD_GENERATION },
      { name: QUEUE_NAMES.MINDCARD_LOGS },
    ),
  ],
  controllers: [MindcardController, MindcardStatusController],
  providers: [
    // Use Cases
    CreateMindcardUseCase,
    CreateMindcardWithAiUseCase,
    CreateMindcardAsyncUseCase,
    UpdateMindcardByIdUseCase,
    FindByIdMindcardUseCase,
    DeleteMindcardByIdUseCase,
    FindByUsuarioIdMindcardUseCase,
    GetMindcardStatusUseCase,
    GetMindcardLogsUseCase,
    // Processors
    MindcardGenerationProcessor,
    MindcardLogsProcessor,
  ],
})
export class MindcardModule {}
