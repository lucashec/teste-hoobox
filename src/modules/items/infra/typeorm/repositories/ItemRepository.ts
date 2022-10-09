import { ItemDTO } from "@modules/items/dtos/ItemDTO";
import { IItemRepository } from "@modules/items/repositories/IItemRepository";
import { join } from "path";
import { getRepository, Repository } from "typeorm";
import { Item } from "../entities/Item";
import { ItemCategory } from "../entities/ItemCategory";

 export default class  ItemRepository implements IItemRepository{
    private ormRepository: Repository<Item>;
    private categoryRepository: Repository<ItemCategory>;

    constructor(){
        this.ormRepository = getRepository(Item);
        this.categoryRepository = getRepository(ItemCategory);
    }
    public async filterByCategory(categoryId: number): Promise<Item[]|undefined> {
        const result = await this.ormRepository.find({where: {itemCategory:{id: categoryId}}})
        return result;
     }
    public async create({price, description, category, name}: ItemDTO): Promise<Item> {
        const item = await this.ormRepository.create({price, description, name});
        const result = await this.categoryRepository.findOne({where: {id: category}})
        item.itemCategory = result!;
        return this.ormRepository.save(item);
     }
    public async getAll(): Promise<Item[]> {
        const items = await this.ormRepository.find();
        return items;
     }
    
 }