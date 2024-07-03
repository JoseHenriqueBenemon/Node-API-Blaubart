
import { UserRepository } from "@/repositories/pg/user.repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { IUser } from "@/entities/interfaces/user.interface";

export class SigninUseCase {
    constructor(private userRepository: UserRepository) {}

    async handler(username: string): Promise<IUser>{
        const user = await this.userRepository.findByUsername(username);

        if (!user) throw new InvalidCredentialsError()
        
        return user;
    }
}