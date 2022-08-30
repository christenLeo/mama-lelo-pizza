import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

export const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log({status: 200, message: `Server is running in https://localhost:${address.port}/`});
    }
    else {
        console.log({status: 500, message: 'Something went wrong please restart the server'})
    }
});