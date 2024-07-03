import { IPerson } from "@/entities/interfaces/person.interface";
import { IPersonRepository } from "@/repositories/person.repository.interface";

export class CreatePersonUseCase {
    constructor(private personRepository: IPersonRepository) {}

    async handler(person: IPerson): Promise<IPerson | undefined>{
        return this.personRepository.create(person);
    }

}