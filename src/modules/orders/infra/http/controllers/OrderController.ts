import CreateOrderService from "../../../services/CreateOrderService";
import { Request, Response } from "express";
import { container } from "tsyringe";
import GetOrdersByUserService from "../../../services/GetOrdersByUserService";
import CancelOrderService from "../../../services/CancelOrderService";
import ConfirmOrderService from "../../../services/ConfirmOrderService";

export class OrderController{
    private static INSTANCE : OrderController

    static getInstace(): OrderController {
        if (!OrderController.INSTANCE){
            OrderController.INSTANCE = new OrderController();
        }
        return OrderController.INSTANCE;   
    }
    async create(request: Request, response: Response){
        try{
            const service = container.resolve(CreateOrderService);
            const {user} = request.body;
            const order = await service.execute({user});
            return response.status(200).json({
                order:{
                    id: order.id,
                    user: order.user,
                }
            });
        }catch(err:any){
            return response.status(400).json({
                error: err.message
            })
        }
    }
    async getOrdersByUser(request: Request, response: Response){
        try{
            const service = container.resolve(GetOrdersByUserService);
            const user = request.query.user?.toString();
            const orders = await service.execute(parseInt(user!));
            return response.status(200).json({
                orders: orders.map(order => ({
                    id: order.id,
                    confirmed: order.confirmed,
                    canceled: order.canceled,
                    orderItems: order.orderItems.map(orderItem => ({
                        id: orderItem.id,
                        amount: 2,
                        price: orderItem.price,
                        name: orderItem.item.name,
                        description: orderItem.item.description,
                        category: orderItem.item.itemCategory.description
                    })),
                    total: order.total
                }))
            })
        }catch(err:any){
            return response.status(400).json({
                error: err.message
            })
        }
    }
    async cancelOrder(request: Request, response: Response){
        try{
            const service = container.resolve(CancelOrderService);
            const id = request.query.id?.toString();
            const order = await service.execute(parseInt(id!));
            return response.status(200).json({
                order:{
                    id: order?.id,
                    confirmed: order?.confirmed,
                    canceled: order?.canceled,
                    orderItems: order?.orderItems.map(orderItem => ({
                        id: orderItem.id,
                        amount: 2,
                        price: orderItem.price,
                        name: orderItem.item.name,
                        description: orderItem.item.description,
                        category: orderItem.item.itemCategory.description
                    })),
                }
            });
        }catch(err:any){
            return response.status(200).json({
                error: err.message
            }); 
        }
    }
    async confirmOrder(request: Request, response: Response){
        try{
            const service = container.resolve(ConfirmOrderService);
            const id = request.query.id?.toString();
            const order = await service.execute(parseInt(id!));
            return response.status(200).json({
                order:{
                    id: order?.id,
                    confirmed: order?.confirmed,
                    canceled: order?.canceled,
                    orderItems: order?.orderItems.map(orderItem => ({
                        id: orderItem.id,
                        amount: 2,
                        price: orderItem.price,
                        name: orderItem.item.name,
                        description: orderItem.item.description,
                        category: orderItem.item.itemCategory.description
                    })),
                }
            });
        }catch(err:any){
            return response.status(200).json({
                error: err.message
            }); 
        }

    }
}