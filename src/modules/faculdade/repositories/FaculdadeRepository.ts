import { Faculdade } from '../entities/Faculdade';

export type ListFaculdadesFilters = {
  search: string;
  limit: number;
};

export abstract class FaculdadeRepository {
  abstract findAll(filters: ListFaculdadesFilters): Promise<Faculdade[]>;
  abstract findById(id: string): Promise<Faculdade | null>;
  abstract findByUf(uf: string): Promise<Faculdade[]>;
}
