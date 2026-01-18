import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ItemMindcardController } from './itemMindcard.controller';
import { CreateItemMindcardUseCase } from 'src/modules/itemMindcard/useCases/createItemMindcardUseCase/createItemMindcardUseCase';
import { FindByIdItemMindcardUseCase } from 'src/modules/itemMindcard/useCases/findByIdItemMindcardUseCase/findByIdItemMindcardUseCase';
import { FindByMindcardIdItemMindcardUseCase } from 'src/modules/itemMindcard/useCases/findByMindcardIdItemMindcardUseCase/findByMindcardIdItemMindcardUseCase';
import { UpdateItemMindcardByIdUseCase } from 'src/modules/itemMindcard/useCases/updateItemMindcardByIdUseCase/updateItemMindcardByIdUseCase';
import { DeleteItemMindcardByIdUseCase } from 'src/modules/itemMindcard/useCases/deleteItemMindcardByIdUseCase/deleteItemMindcardByIdUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemMindcardController],
  providers: [
    CreateItemMindcardUseCase,
    FindByIdItemMindcardUseCase,
    FindByMindcardIdItemMindcardUseCase,
    UpdateItemMindcardByIdUseCase,
    DeleteItemMindcardByIdUseCase,
  ],
})
export class ItemMindcardModule {}
