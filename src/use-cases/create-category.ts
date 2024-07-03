import { CategoryRepository } from "@/repositories/typeorm/category.repository";

export class CreateCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async handler(name: string): Promise<void> {
        await this.categoryRepository.create(name);
    }
}