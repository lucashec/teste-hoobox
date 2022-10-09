import { Order } from "../../../../orders/infra/typeorm/entities/Order";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}