import express from 'express';
import {DefaultApi} from "./generatedClient/api/defaultApi";

const app = express();
const port = 3000;
const client = new DefaultApi("http://localhost:3000");

app.get('/', (req, res) => {
    client.getRecipientById("abcdeddd").then((apiResponse) => {
        console.log("Got response!");
        res.send("Got recipient from API! </br>" + JSON.stringify(apiResponse.body.recipient));
    }).catch((error) => {
        console.log("Request failed!");
        res.send("Failed getting recipient from API! </br>" + JSON.stringify(error));
    });
});

app.get('/recipients/:id', (req, res) => {
    res.json({
        "recipient": {
            "id": req.params.id,
            "name": "john.doe",
            "email": "john@example.com"
        }
    });
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});