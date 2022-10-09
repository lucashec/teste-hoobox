import { User } from "../../users/infra/typeorm/entities/User";
import { OrderItemDTO } from "./OrderItemDTO";

export interface OrderDTO{
    user: number;
}