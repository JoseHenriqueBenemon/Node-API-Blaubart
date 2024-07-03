import { IPerson } from "@/entities/interfaces/person.interface";

export interface IPersonRepository {
    create(person: IPerson): Promise<IPerson | undefined>
}
