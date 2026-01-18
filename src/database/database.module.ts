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
  ],
  exports: [
    PrismaService,
    UserRepository,
    MindcardRepository,
    ItemMindcardRepository,
    OpcaoRespostaRepository,
    FaculdadeRepository,
  ],
})
export class DatabaseModule {}
