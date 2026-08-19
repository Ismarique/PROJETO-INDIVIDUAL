import { server } from "./server.js";

const port: number = 3333

server.listen(port,() => {
    console.log (`servidor sendo executado no endereço https://localhost:${port}`);
})