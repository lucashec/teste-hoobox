import { inject, injectable } from "tsyringe";
import { OrderItemDTO } from "../dtos/OrderItemDTO";
import { OrderItem } from "../infra/typeorm/entities/OrderItem";
import { IOrderItemRepository } from "../repositories/IOrderItemRepository";

@injectable()
export default class AddOrderItemService{
    constructor(
        @inject('OrderItemRepository')
        private orderItemepository: IOrderItemRepository
    ){}
    public async execute(dto: OrderItemDTO):Promise<OrderItem>{
        const orderItem = await this.orderItemepository.create(dto);
        return orderItem;
    }
}