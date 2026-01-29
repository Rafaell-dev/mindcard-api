import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { MindcardRepository } from 'src/modules/mindcard/repositories/MindcardRepository';
import { PrismaMindcardRepository } from './prisma/repositories/PrismaMindcardRepository';
import { ItemMindcardRepository } from 'src/modules/itemMindcard/repositories/ItemMindcardRepository';
import { PrismaItemMindcardRepository } from './prisma/repositories/PrismaItemMindcardRepository';
import { OpcaoRespostaRepository } from 'src/modules/itemMindcard/repositories/OpcaoRespostaRepository';
import { PrismaOpcaoRespostaRepository } from './prisma/repositories/PrismaOpcaoRespostaRepository';
import { FaculdadeRepository } from 'src/modules/faculdade/repositories/FaculdadeRepository';
import { PrismaFaculdadeRepository } from './prisma/repositories/PrismaFaculdadeRepository';
import { DeckRepository } from 'src/modules/deck/repositories/DeckRepository';
import { PrismaDeckRepository } from './prisma/repositories/PrismaDeckRepository';
import { FlashcardRepository } from 'src/modules/deck/repositories/FlashcardRepository';
import { PrismaFlashcardRepository } from './prisma/repositories/PrismaFlashcardRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: MindcardRepository,
      useClass: PrismaMindcardRepository,
    },
    {
      provide: ItemMindcardRepository,
      useClass: PrismaItemMindcardRepository,
    },
    {
      provide: OpcaoRespostaRepository,
      useClass: PrismaOpcaoRespostaRepository,
    },
    {
      provide: FaculdadeRepository,
      useClass: PrismaFaculdadeRepository,
    },
    {
      provide: DeckRepository,
      useClass: PrismaDeckRepository,
    },
    {
      provide: FlashcardRepository,
      useClass: PrismaFlashcardRepository,
    },
  ],
  exports: [
    PrismaService,
    UserRepository,
    MindcardRepository,
    ItemMindcardRepository,
    OpcaoRespostaRepository,
    FaculdadeRepository,
    DeckRepository,
    FlashcardRepository,
  ],
})
export class DatabaseModule {}
