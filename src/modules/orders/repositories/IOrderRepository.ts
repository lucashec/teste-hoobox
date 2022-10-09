import { OrderDTO } from "../dtos/OrderDTO";
import { Order } from "../infra/typeorm/entities/Order";

export interface IOrderRepository{
    create(data: OrderDTO):Promise<Order>;
    getOrdersByUser(userId:number):Promise<Order[]>;
    getOrderById(orderId:number):Promise<Order | null>;
    update(orderId:number,data: any):Promise<Order | null>;
}