import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { IProduct } from "./interfaces/product.interface";
import { ICategory } from "./interfaces/category.interface";
import { Category } from "./category.entity";

@Entity({
    name: "product"
})
export class Product implements IProduct {
    image_url: string;
    @PrimaryGeneratedColumn("uuid", {
        name: "id"
    })
    id?: string | undefined;

    @Column({
        name: "name",
        type: "varchar"
    })
    name: string;

    @Column({
        name: "description",
        type: "text"
    })
    description: string;

    @Column({
        name: "image_url",
        type: "varchar"
    })
    image: string;

    @Column({
        name: "price",
        type: "double precision"
    })
    price: number;

    @ManyToMany(() => Category, {
        cascade: true
    })
    @JoinTable({
        name: "product_category",
        joinColumn: {
            name: "product_id",
            referencedColumnName: "id"   
        },
        inverseJoinColumn: {
            name: "category_id",
            referencedColumnName: "id"
        }
    })
    categories?: ICategory[] | undefined;
}