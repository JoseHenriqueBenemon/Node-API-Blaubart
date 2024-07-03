import { IProduct } from "@/entities/interfaces/product.interface";
import { IProductRepository } from "@/repositories/product.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class FindProductUseCase {
    constructor(private productRepostiroy: IProductRepository) {}

    async handler(id: string): Promise<IProduct | null> {
        const product = await this.productRepostiroy.findById(id);

        if(!product) throw new ResourceNotFoundError();

        return product;
    }
}
