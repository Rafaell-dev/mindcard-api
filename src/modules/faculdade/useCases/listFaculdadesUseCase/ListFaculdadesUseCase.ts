import { Injectable } from '@nestjs/common';
import { Faculdade } from '../../entities/Faculdade';
import {
  FaculdadeRepository,
  ListFaculdadesFilters,
} from '../../repositories/FaculdadeRepository';

@Injectable()
export class ListFaculdadesUseCase {
  constructor(private readonly faculdadeRepository: FaculdadeRepository) {}

  async execute(filters: ListFaculdadesFilters): Promise<Faculdade[]> {
    const faculdades = await this.faculdadeRepository.findAll(filters);

    return faculdades;
  }
}
