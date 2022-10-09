import AddOrderItemService from "../../../services/AddOrderItemService";
import RemoveOrderItemService from "../../../services/RemoveOrderItemService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class OrderItemController{
    private static INSTANCE : OrderItemController

    static getInstace(): OrderItemController {
        if (!OrderItemController.INSTANCE){
            OrderItemController.INSTANCE = new OrderItemController();
        }
        return OrderItemController.INSTANCE;   
    }
    async addOrderItem(request: Request, response: Response){
        try{
            const service = container.resolve(AddOrderItemService);
            const {amount, order,item} = request.body;
            const orderItem = await service.execute({amount, order, item});
            return response.status(200).json({
                orderItem:{
                    id: orderItem.id,
                    order: {
                        confirmed: orderItem.order.confirmed,
                        canceled: orderItem.order.canceled,
                    },
                    amount: orderItem.amount,
                    item: {
                        id: orderItem.item.id,
                        name: orderItem.item.name,
                        price: orderItem.item.price,
                        description: orderItem.item.description,
                        category: orderItem.item.itemCategory.description
                    }
                }
            })
        }catch(err:any){
            return response.status(400).json({
                error: err.message
            })
        }
    }
    async removeOrderItem(request: Request, response: Response){
        try{
            const service = container.resolve(RemoveOrderItemService);
            const id = request.query.id?.toString();
            await service.execute(parseInt(id!));
            return response.status(200).json({
                message: 'Item deleted from order'
            });
        }catch(err: any){
            return response.status(400).json({
                error: err.message
            })
        }
    }
}