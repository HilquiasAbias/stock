import { TipoContatoRepository } from "../repositories/tipo-contato.repository";

export class TipoContatoUseCase {
    tipoContatoRepository;

    constructor() {
        this.tipoContatoRepository = new TipoContatoRepository();
    }

    async findAll() {
        return await prisma.tipoContatoRepository.findAll();
    }
}