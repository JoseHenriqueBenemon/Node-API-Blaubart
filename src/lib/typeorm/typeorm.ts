import { DataSource } from "typeorm";
import { env } from "@/env";
import { Product } from "@/entities/product.entity";
import { Category } from "@/entities/category.entity";
import { ProductAutoGenerateUUID1719456485432 } from "./migrations/1719456485432-ProductAutoGenerateUUID";

export const appDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    logging: env.NODE_ENV === "development",
    entities: [Product, Category],
    migrations: [ProductAutoGenerateUUID1719456485432]
});

appDataSource.initialize()
.then(() => {
    console.log("Database with typeorm connected!");
})
.catch((error) => {
    console.error("Error connecting to database with typeorm", error);
});