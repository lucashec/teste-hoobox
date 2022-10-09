import { inject, injectable } from "tsyringe";
import { ItemCategoryDTO } from "../dtos/ItemCategoryDTO";
import { ItemCategory } from "../infra/typeorm/entities/ItemCategory";
import { IItemCategoryRepository } from "../repositories/IItemCategoryRepository";

@injectable()
export default class CreateItemCategoryService{

    constructor(
        @inject('ItemCategoryRepository')
        private ItemCategoryRepository:IItemCategoryRepository){}
    
    public async execute(dto:ItemCategoryDTO): Promise<ItemCategory>{
        return await this.ItemCategoryRepository.create({
            description: dto.description
        });
    }
}