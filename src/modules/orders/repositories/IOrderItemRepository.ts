import { OrderItemDTO } from "../dtos/OrderItemDTO";
import { OrderItem } from "../infra/typeorm/entities/OrderItem";

export interface IOrderItemRepository{
    create(dto: OrderItemDTO):Promise<OrderItem>;
    delete(orderItemId: number):Promise<void>;
    getTotalPrice(orderId:number):Promise<number>;
}