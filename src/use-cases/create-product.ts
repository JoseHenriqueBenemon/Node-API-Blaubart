import { IProduct } from "@/entities/interfaces/product.interface";
import { ProductRepository } from "@/repositories/typeorm/product.repository";

export class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) {}

    async handler(product: IProduct): Promise<IProduct> {
        return this.productRepository.create(product);
    }
}
