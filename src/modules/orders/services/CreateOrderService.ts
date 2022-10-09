import { inject, injectable } from "tsyringe";
import { OrderDTO } from "../dtos/OrderDTO";
import { Order } from "../infra/typeorm/entities/Order";
import { IOrderRepository } from "../repositories/IOrderRepository";

@injectable()
export default class CreateOrderService{
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository
    ){}
    public async execute(dto: OrderDTO):Promise<Order>{
        const order = await this.orderRepository.create(dto);
        return order;
    }
}