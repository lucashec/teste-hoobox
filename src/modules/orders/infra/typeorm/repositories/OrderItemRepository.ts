import { Item } from "../../../../items/infra/typeorm/entities/Item";
import { OrderItemDTO } from "../../../dtos/OrderItemDTO";
import { IOrderItemRepository } from "../../../repositories/IOrderItemRepository";
import { getRepository, Repository } from "typeorm";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";

export default class OrderItemRepository implements IOrderItemRepository{
    private ormRepository: Repository<OrderItem>;
    private orderRepository: Repository<Order>;
    private itemRepository: Repository<Item>;

    constructor(){
        this.ormRepository = getRepository(OrderItem);
        this.orderRepository = getRepository(Order);
        this.itemRepository = getRepository(Item);
    }
    async create({amount, order, item}: OrderItemDTO): Promise<OrderItem> {
        const orderItem = await this.ormRepository.create({
            amount
        });
        const orderResult = await this.orderRepository.findOne({where: {id: order}});
        const itemResult = await this.itemRepository.findOne({where: {id: item}});
        orderItem.order = orderResult!;
        orderItem.item = itemResult!;
        orderItem.price = itemResult!.price;
        return await this.ormRepository.save(orderItem);
    }
    async delete(orderItemId:number):Promise<void>{
        await this.ormRepository.delete(orderItemId);
    }
    async getTotalPrice(orderId:number): Promise<number>{
        const items = await this.ormRepository.find({where: {order: {id: orderId}}});
        let total = 0;
        for (let item of items){
            total += item.price * item.amount; 
        }
        return total;
    }
}