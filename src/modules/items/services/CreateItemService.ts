import { inject, injectable } from "tsyringe";
import { ItemDTO } from "../dtos/ItemDTO";
import { Item } from "../infra/typeorm/entities/Item";
import { IItemRepository } from "../repositories/IItemRepository";

@injectable()
export default class CreateItemService{
    constructor(
        @inject('ItemRepository')
        private itemRepository: IItemRepository
    ){}

    public async execute({
        name,
        price,
        description,
        category
    }: ItemDTO): Promise<Item>{
        return await this.itemRepository.create({
            name,
            price,
            description,
            category
        })
    }
}