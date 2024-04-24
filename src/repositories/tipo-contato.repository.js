import { prisma } from "../database/prisma-client.js";

export class TipoContatoRepository {
    async findAll() {
        return await prisma.tipoContato.findMany();
    }

    async findById(id) { }

    async create(tipoContato) { }

    async update(tipoContato) { }

    async delete(id) { }
}
