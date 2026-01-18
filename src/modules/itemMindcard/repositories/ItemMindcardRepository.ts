import { ItemMindcard, type ItemMindcardProps } from '../entities/ItemMindcard';

export abstract class ItemMindcardRepository {
  abstract create(itemMindcard: ItemMindcard): Promise<void>;
  abstract findById(id: string): Promise<ItemMindcard | null>;
  abstract findByMindcardId(mindcardId: string): Promise<ItemMindcard[]>;
  abstract updateById(
    id: string,
    itemMindcard: Partial<ItemMindcardProps>,
  ): Promise<ItemMindcard | null>;
  abstract deleteById(id: string): Promise<void>;
}
