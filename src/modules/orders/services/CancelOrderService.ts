import { inject, injectable } from "tsyringe";
import { IOrderRepository } from "../repositories/IOrderRepository";

@injectable()
export default class CancelOrderService{
    constructor(
        @inject('OrderRepository')
        private orderepository: IOrderRepository,
    ){}

    async execute(id:number){
        let order = await this.orderepository.getOrderById(id);
        if(order?.confirmed){
            throw new Error('This order cannot be canceled');
        }
        if (order?.canceled){
            throw new Error('This order is already canceled');
        }
        const orderUpdated = await this.orderepository.update(id, {canceled: true});
        return orderUpdated;
    }
}