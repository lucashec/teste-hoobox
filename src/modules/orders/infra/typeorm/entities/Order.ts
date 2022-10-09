import { User } from "../../../../users/infra/typeorm/entities/User";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./OrderItem";
@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:false})
    confirmed: boolean;

    @Column({default: false})
    canceled: boolean;

    total: number;

    @OneToMany(() => OrderItem, (itemOrder) => itemOrder.order, {eager: true})
    orderItems: OrderItem[];

    @ManyToOne(() => User, (user) => user.orders)
    user: User;
}