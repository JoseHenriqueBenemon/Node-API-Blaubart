import { makeFindWithPersonUseCase } from "@/use-cases/factory/make-find-with-person-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function  find(request: FastifyRequest, reply: FastifyReply) {
    
    const registerParamsSchema = z.object({
        id: z.coerce.number()
    });
    
    const { id } = registerParamsSchema.parse(request.params);

    const findWithpersonUseCase = makeFindWithPersonUseCase();
    const userWithPerson = await findWithpersonUseCase.handler(id);

    return reply.status(200).send(userWithPerson);
}
