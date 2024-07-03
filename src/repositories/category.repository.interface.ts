import { IProduct } from "@/entities/interfaces/product.interface";

export interface ICategoryRepository{
    create(name: string, products?: IProduct[]): Promise<void>;
}