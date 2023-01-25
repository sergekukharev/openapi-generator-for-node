import {DefaultApi} from "testClient/api/defaultApi";

console.log("hi!");

const api = new DefaultApi("example.com/api");

api.recipientsIdGet("abcdef").then(()=>{
    console.log("Got response!");
});
