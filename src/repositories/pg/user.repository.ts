
import { database } from "@/lib/pg/db";
import { IUserRepository } from "../user.repositroy.interface";
import { IUser } from "@/entities/interfaces/user.interface";
import { IPerson } from "@/entities/interfaces/person.interface";

export class UserRepository implements IUserRepository{
    public async create({username, password}: IUser): Promise<IUser | undefined>{
        const result = await database.clientInstance?.query<IUser>(
          `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING *`,
          [username, password]  
        );

        return result?.rows[0];
    }

    public async findByUsername(username: string): Promise<IUser | undefined> {
      const result = await database.clientInstance?.query<IUser>(
        `SELECT * FROM "user" WHERE "user".username = $1;`,
        [username]    
      );

      return result?.rows[0];
    }

    public async findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined> {
      const result = await database.clientInstance?.query<(IUser & IPerson)>(
          `SELECT * FROM "user" LEFT JOIN person p ON "user".id = p.user_id WHERE "user".id = $1;`,
          [ userId ]
      );

      return result?.rows[0];
  }
  
}
