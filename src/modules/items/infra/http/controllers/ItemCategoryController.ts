import { container } from "tsyringe";
import {Request, Response} from 'express';
import CreateItemCategoryService from "../../../services/CreateItemCategory";

export class ItemCategoryController{
    private static INSTANCE : ItemCategoryController

    static getInstace(): ItemCategoryController {
        if (!ItemCategoryController.INSTANCE){
            ItemCategoryController.INSTANCE = new ItemCategoryController();
        }
        return ItemCategoryController.INSTANCE;   
    }

    async create(request: Request, response: Response){
        try{
            const categoryService = container.resolve(CreateItemCategoryService);
            const {
                description,
            } = request.body;
            const category = await categoryService.execute({
                description,
            });
            return response.status(200).json({
                category:{
                    id: category!.id,
                    description: category.description
                }
            })
        } catch(err:any){
            return response.status(400).json({
                message: err.message,
            })
        }
    }
}