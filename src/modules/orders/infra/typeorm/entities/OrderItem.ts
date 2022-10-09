import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "../../../../items/infra/typeorm/entities/Item";
import { Order } from "./Order";
@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    price: number;

    @Column()
    amount: number;

    @ManyToOne(() => Order, (order) => order.orderItems)
    order: Order;

    @ManyToOne(() => Item, {eager: true})
    item: Item
}