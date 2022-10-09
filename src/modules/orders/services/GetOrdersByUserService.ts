import { inject, injectable } from "tsyringe";
import { Order } from "../infra/typeorm/entities/Order";
import { IOrderItemRepository } from "../repositories/IOrderItemRepository";
import { IOrderRepository } from "../repositories/IOrderRepository";

@injectable()
export default class GetOrdersByUserService{
    constructor(
        @inject('OrderRepository')
        private orderepository: IOrderRepository,
        @inject('OrderItemRepository')
        private ordereItempository: IOrderItemRepository
    ){}
    async calculateTotal(id:number){
        let orders = await this.orderepository.getOrdersByUser(id);
        orders.forEach(async (order)=>{
            order.total = await this.ordereItempository.getTotalPrice(order.id);
        });
        return orders;
    }
    public async execute(id: number):Promise<Order[]>{
        const orders = await this.calculateTotal(id);
        return orders;
    }
}