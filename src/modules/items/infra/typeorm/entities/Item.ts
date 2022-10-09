import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemCategory } from "./ItemCategory";
@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('float')
    price: number;

    @Column()
    description: string;

    @ManyToOne(() => ItemCategory, (ItemCategory) => ItemCategory.items, {eager: true})
    itemCategory: ItemCategory;
}