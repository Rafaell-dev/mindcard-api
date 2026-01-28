import { Module } from '@nestjs/common';
import { DeckController } from './deck.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CreateDeckUseCase } from 'src/modules/deck/useCases/createDeckUseCase/CreateDeckUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [DeckController],
  providers: [CreateDeckUseCase],
})
export class DeckModule {}
