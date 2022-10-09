import { inject, injectable } from "tsyringe";
import { IOrderRepository } from "../repositories/IOrderRepository";

@injectable()
export default class ConfirmOrderService{
    constructor(
        @inject('OrderRepository')
        private orderepository: IOrderRepository,
    ){}

    async execute(id:number){
        let order = await this.orderepository.getOrderById(id);
        if (!order){
            throw new Error('Order could not be found');
        }
        if(order?.confirmed){
            throw new Error('This order is already confirmed');
        }
        if (order?.canceled){
            throw new Error('This is order cannot be confirmed');
        }
        const orderUpdated = await this.orderepository.update(id, {confirmed: true});
        return orderUpdated;
    }
}