import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "../../../../items/infra/typeorm/entities/Item";
@Entity()
export class ItemCategory{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(() => Item, (item) => item.itemCategory)
    items: Item[];
}