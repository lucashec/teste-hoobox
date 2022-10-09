import { inject, injectable } from "tsyringe";
import { IOrderItemRepository } from "../repositories/IOrderItemRepository";

@injectable()
export default class RemoveOrderItemService{
    constructor(
        @inject('OrderItemRepository')
        private orderItemepository: IOrderItemRepository
    ){}
    public async execute(id: number):Promise<void>{
        await this.orderItemepository.delete(id);
    }
}