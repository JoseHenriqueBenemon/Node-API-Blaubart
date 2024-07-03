import { IUser } from "./interfaces/user.interface";

export class User implements IUser{
    id?: number
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
