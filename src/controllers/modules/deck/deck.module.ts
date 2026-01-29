import { Module } from '@nestjs/common';
import { DeckController } from './deck.controller';
import { FlashcardController } from './flashcard.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CreateDeckUseCase } from 'src/modules/deck/useCases/createDeckUseCase/CreateDeckUseCase';
import { UpdateDeckUseCase } from 'src/modules/deck/useCases/updateDeckUseCase/UpdateDeckUseCase';
import { DeleteDeckUseCase } from 'src/modules/deck/useCases/deleteDeckUseCase/DeleteDeckUseCase';
import { ListDecksUseCase } from 'src/modules/deck/useCases/listDecksUseCase/ListDecksUseCase';
import { UpdateFlashcardUseCase } from 'src/modules/deck/useCases/updateFlashcardUseCase/UpdateFlashcardUseCase';
import { DeleteFlashcardUseCase } from 'src/modules/deck/useCases/deleteFlashcardUseCase/DeleteFlashcardUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [DeckController, FlashcardController],
  providers: [
    CreateDeckUseCase,
    UpdateDeckUseCase,
    DeleteDeckUseCase,
    ListDecksUseCase,
    UpdateFlashcardUseCase,
    DeleteFlashcardUseCase,
  ],
})
export class DeckModule {}
