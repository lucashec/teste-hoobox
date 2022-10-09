import { inject, injectable } from "tsyringe";
import { Item } from "../infra/typeorm/entities/Item";
import { IItemRepository } from "../repositories/IItemRepository";

@injectable()
export default class filterByCategoryService{
    constructor(
        @inject('ItemRepository')
        private itemRepository: IItemRepository
    ){}
    public async execute(categoryId:number): Promise<Item[]|undefined>{
        const items = await this.itemRepository.filterByCategory(categoryId);
        return items;
    }
}