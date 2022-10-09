import { ItemCategory } from "../infra/typeorm/entities/ItemCategory";

export interface ItemDTO{
    name: string;
    price: number;
    description: string;
    category: number;
}