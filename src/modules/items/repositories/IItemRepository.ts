import { ItemDTO } from "../dtos/ItemDTO";
import { Item } from "../infra/typeorm/entities/Item";

export interface IItemRepository{
  create(data: ItemDTO): Promise<Item>;
  getAll():Promise<Item[]>;
  filterByCategory(categoryId: number):Promise<Item[]|undefined>;
}