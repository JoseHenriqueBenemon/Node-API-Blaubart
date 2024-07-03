import { makeCreateUserUseCase } from "@/use-cases/factory/make-create-user-use-case";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        username: z.string(),
        password: z.string()
    });

    const { username, password } = registerBodySchema.parse(request.body);

    const hashedPassword = await hash(password, 8);

    const userWithHashedPassWord = { username, password: hashedPassword};

    const createUserUseCase = makeCreateUserUseCase();  
    const user = await createUserUseCase.handler(userWithHashedPassWord);

    return reply.status(201).send({ id: user?.id, username: user?.username });
}
