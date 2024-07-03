import { IPerson } from "@/entities/interfaces/person.interface"
import { IUser } from "@/entities/interfaces/user.interface"


export interface IUserRepository {
    findWithPerson(userId: number): Promise<IUser & IPerson | undefined>;
    findByUsername(username: string): Promise<IUser | undefined>;
    create(user: IUser): Promise<IUser | undefined>;
}
