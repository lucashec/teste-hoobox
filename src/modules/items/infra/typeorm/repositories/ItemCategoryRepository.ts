import { ItemCategoryDTO } from "../../../dtos/ItemCategoryDTO";
import { IItemCategoryRepository } from "../../../repositories/IItemCategoryRepository";
import { getRepository, Repository } from "typeorm";
import { ItemCategory } from "../entities/ItemCategory";

export default class ItemCategoryRepository implements IItemCategoryRepository{
    private ormRepository: Repository<ItemCategory>;

    public constructor(){
        this.ormRepository = getRepository(ItemCategory);
    }
    public async create(dto: ItemCategoryDTO): Promise<ItemCategory> {
        this.ormRepository.create(dto);
        return await this.ormRepository.save(dto);    
    }
    
}