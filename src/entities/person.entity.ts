import { IPerson } from "./interfaces/person.interface";

export class Person implements IPerson{
    id?: number;
    cpf: string;
    name: string;
    birth: Date;
    email: string;
    user_id?: number;

    constructor(
        cpf: string,
        name: string,
        birth: Date,
        email: string,
        user_id?: number
    ) {
        this.cpf = cpf;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.user_id = user_id;
    }
}