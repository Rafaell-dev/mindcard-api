import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OnboardingController } from 'src/controllers/modules/onboarding/onboarding.controller';
import { ListPerguntasOnboardingUseCase } from './useCases/listPerguntasOnboardingUseCase/ListPerguntasOnboardingUseCase';
import { SalvarRespostasOnboardingUseCase } from './useCases/salvarRespostasOnboardingUseCase/SalvarRespostasOnboardingUseCase';
import { VerificarOnboardingCompletoUseCase } from './useCases/verificarOnboardingCompletoUseCase/VerificarOnboardingCompletoUseCase';
import { GetStatusOnboardingUseCase } from './useCases/getStatusOnboardingUseCase/GetStatusOnboardingUseCase';
import { PerguntaOnboardingRepository } from './repositories/PerguntaOnboardingRepository';
import { RespostaOnboardingRepository } from './repositories/RespostaOnboardingRepository';
import { PrismaPerguntaOnboardingRepository } from 'src/database/prisma/repositories/PrismaPerguntaOnboardingRepository';
import { PrismaRespostaOnboardingRepository } from 'src/database/prisma/repositories/PrismaRespostaOnboardingRepository';
import { UserModule } from 'src/controllers/modules/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [OnboardingController],
  providers: [
    ListPerguntasOnboardingUseCase,
    SalvarRespostasOnboardingUseCase,
    VerificarOnboardingCompletoUseCase,
    GetStatusOnboardingUseCase,
    {
      provide: PerguntaOnboardingRepository,
      useClass: PrismaPerguntaOnboardingRepository,
    },
    {
      provide: RespostaOnboardingRepository,
      useClass: PrismaRespostaOnboardingRepository,
    },
  ],
  exports: [VerificarOnboardingCompletoUseCase],
})
export class OnboardingModule {}
