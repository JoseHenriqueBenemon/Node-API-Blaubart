import { create } from "@/http/controllers/user/create";
import { find } from "@/http/controllers/user/find";
import { FastifyInstance } from "fastify";
import { signin } from "./signin";

export async function userRoutes(app: FastifyInstance) {
    app.get("/user/:id", find)
    app.post("/user", create);
    app.post("/user/signin", signin)
}
