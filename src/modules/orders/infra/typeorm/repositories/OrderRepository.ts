import { OrderItemDTO } from "../../../dtos/OrderItemDTO";
import { User } from "../../../../users/infra/typeorm/entities/User";
import { getRepository, Repository } from "typeorm";
import { OrderDTO } from "../../../dtos/OrderDTO";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { Order } from "../entities/Order";
import OrderItemRepository from "./OrderItemRepository";

export default class OrderRepository implements IOrderRepository{
    private ormRepository: Repository<Order>;
    private userRepository: Repository<User>;
    private orderItemRepository: OrderItemRepository;
    public constructor(){
        this.ormRepository = getRepository(Order);
        this.userRepository = getRepository(User);
        this.orderItemRepository = new OrderItemRepository();
    }
    public async create({user}: OrderDTO): Promise<Order> {
        const userResult = await this.userRepository.findOne({where: {id: user}});
        const order = await this.ormRepository.create({user: userResult!});
        const orderSaved = await this.ormRepository.save(order);
        // for(let orderItem of orderItems){
        //     let obj:OrderItemDTO = {
        //         price: orderItem.price,
        //         amount: orderItem.amount,
        //         order: orderSaved.id,
        //         item: orderItem.item
        //     }
        //     await this.orderItemRepository.create(obj);
        // }
        return orderSaved;
    }
    public async getOrdersByUser(userId: number): Promise<Order[]> {
        const orders = await this.ormRepository.find({where: {user: {id: userId}}});
        return orders;
    }
    public async getOrderById(orderId: number):Promise<Order | null>{
        return await this.ormRepository.findOne({where: {id: orderId}});
    }
    public async update(orderId:number,data: any): Promise<Order | null> {
        await this.ormRepository.update(orderId, data);
        const order = await this.ormRepository.findOne({where: {id: orderId}});
        return order;
    }
}