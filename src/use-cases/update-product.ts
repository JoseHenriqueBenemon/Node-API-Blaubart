import { IProduct } from "@/entities/interfaces/product.interface";
import { IProductRepository } from "@/repositories/product.repository.interface";

export class UpdateProductUseCase {
    constructor(private productRepository: IProductRepository) {}

    async handler(product: IProduct): Promise<IProduct> {
        return await this.productRepository.update(product);
    }
}