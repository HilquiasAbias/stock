import { TipoContatoUseCase } from "../useCases/tipo-contato.usecase.js";

export async function tipoContatoRoutes(fastify) {
    const tipoContatoUseCase = new TipoContatoUseCase();

    fastify.get("/", async (request, reply) => {
        const tiposContato = await tipoContatoUseCase.findAll();
        reply.send(tiposContato);
    });
}