import { create } from "@/http/controllers/person/create";
import { FastifyInstance } from "fastify";

export async function personRoutes(app: FastifyInstance) {
    app.post("/person", create);
}
