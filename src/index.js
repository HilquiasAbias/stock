import fastify from "fastify";
import { tipoContatoRoutes } from "./routes/tipo-contato.routes.js";

const app = fastify();

app.register(tipoContatoRoutes, { prefix: "/tipo-contato" });

app.listen(
    {
        port: 3000,
    },
    (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    }
)