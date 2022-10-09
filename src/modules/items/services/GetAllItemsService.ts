import { inject, injectable } from "tsyringe";
import { Item } from "../infra/typeorm/entities/Item";
import { IItemRepository } from "../repositories/IItemRepository";

@injectable()
export default class GetAllItemsService{
    constructor(
        @inject('ItemRepository')
        private itemRepository: IItemRepository
    ){}

    public async execute():Promise<Item[]>{
        return await this.itemRepository.getAll();
    }
}