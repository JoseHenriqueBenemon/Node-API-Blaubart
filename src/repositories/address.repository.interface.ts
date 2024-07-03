import { IAddress } from "@/entities/interfaces/address.interface";
import { IPerson } from "@/entities/interfaces/person.interface";

export interface IAddressRepository{
    findAddressByPersonId(personId: number, page: number, limit: number): Promise<(IAddress & IPerson)[]>
    create(address: IAddress): Promise<IAddress | undefined>
}
