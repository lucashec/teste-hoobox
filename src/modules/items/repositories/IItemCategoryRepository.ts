import { ItemCategoryDTO } from "../dtos/ItemCategoryDTO";
import { ItemCategory } from "../infra/typeorm/entities/ItemCategory";

export interface IItemCategoryRepository{
    create(dto: ItemCategoryDTO): Promise<ItemCategory>;
}