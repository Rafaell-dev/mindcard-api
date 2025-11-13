import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CardController } from './card.controller';
import { CreateCardUseCase } from 'src/modules/card/useCases/createCardUseCase/createCardUseCase';
import { FindByIdCardUseCase } from 'src/modules/card/useCases/findByIdCardUseCase/findByIdCardUseCase';
import { FindByMindcardIdCardUseCase } from 'src/modules/card/useCases/findByMindcardIdCardUseCase/findByMindcardIdCardUseCase';
import { UpdateCardByIdUseCase } from 'src/modules/card/useCases/updateCardByIdUseCase/updateCardByIdUseCase';
import { DeleteCardByIdUseCase } from 'src/modules/card/useCases/deleteCardByIdUseCase/deleteCardByIdUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [CardController],
  providers: [
    CreateCardUseCase,
    FindByIdCardUseCase,
    FindByMindcardIdCardUseCase,
    UpdateCardByIdUseCase,
    DeleteCardByIdUseCase,
  ],
})
export class CardModule {}
