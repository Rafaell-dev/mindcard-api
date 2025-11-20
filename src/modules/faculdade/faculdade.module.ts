import { Module } from '@nestjs/common';
import { FaculdadeController } from 'src/controllers/modules/faculdade/faculdade.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ListFaculdadesUseCase } from './useCases/listFaculdadesUseCase/ListFaculdadesUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [FaculdadeController],
  providers: [ListFaculdadesUseCase],
})
export class FaculdadeModule {}
