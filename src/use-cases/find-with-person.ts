import { IPerson } from "@/entities/interfaces/person.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { IUserRepository } from "@/repositories/user.repositroy.interface";
import { IUser } from "@/entities/interfaces/user.interface";

export class FindWithPersonUseCase {
    constructor(private userRepository: IUserRepository) {}

    async handler(userId: number): Promise<(IUser & IPerson) | undefined> {
        const user = await this.userRepository.findWithPerson(userId);
        if(!user) throw new ResourceNotFoundError();

        return user;
    }
}
