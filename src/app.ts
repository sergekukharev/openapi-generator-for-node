import express from 'express';
import {DefaultApi} from "./generatedClient/api/defaultApi";

const app = express();
const port = 3000;
const client = new DefaultApi("https://example.com/api/");

app.get('/', (req, res) => {
    res.send('Hello World!');

    client.getRecipientById("abcdeddd").then(() => {
        console.log("Got response!");
    }).catch(() => {
        console.log("Request failed!");
    });
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});