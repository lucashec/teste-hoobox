import CreateItemService from "../../../services/CreateItemService";
import { container } from "tsyringe";
import {Request, Response} from 'express';
import GetAllItemsService from "../../../services/GetAllItemsService";
import filterByCategoryService from "../../../services/FilterByCategoryService";

export class ItemController{
    private static INSTANCE : ItemController

    static getInstace(): ItemController {
        if (!ItemController.INSTANCE){
            ItemController.INSTANCE = new ItemController();
        }
        return ItemController.INSTANCE;   
    }

    async create(request: Request, response: Response){
        try{
            const itemService = container.resolve(CreateItemService);
            const {
                name,
                price,
                description,
                category
            } = request.body;
            const item = await itemService.execute({
                name,
                price,
                description,
                category,
            });
            return response.status(200).json({
                item:{
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    category: item.itemCategory.description
                }
            })
        } catch(err:any){
            return response.status(400).json({
                message: err.message,
            })
        }
    }
    async getAll(request:Request, response: Response){
        try{
            const service = container.resolve(GetAllItemsService);
            const items = await service.execute();
            return response.status(200).json({
                items: items.map((item) => ({
                    id: item.id,
                    price: item.price,
                    description: item.description,
                    category: item.itemCategory.description
                }))
            })
        } catch(err:any){
            return response.status(400).json({
                error: err.message
            })
        }
    }
    async filterByCategory(request: Request, response: Response){
        try{
            const service = container.resolve(filterByCategoryService);
            const category = request.query.id?.toString();
            const items = await service.execute(parseInt(category!));
            return response.status(200).json({
                items: items?.map((item) => ({
                    id: item.id,
                    price: item.price,
                    name: item.name,
                    description: item.description,
                    category: item.itemCategory.description
                }))
            })
        } catch(err:any){
            return response.status(400).json({
                error: err.message
            })
        }
    }
}