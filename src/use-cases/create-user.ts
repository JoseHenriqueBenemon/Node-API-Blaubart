import { IUser } from "@/entities/interfaces/user.interface";
import { IUserRepository } from "@/repositories/user.repositroy.interface";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async handler(user: IUser): Promise<IUser | undefined> {
        return this.userRepository.create(user);
    }
}
