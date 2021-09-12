import express from "express";
const app = express();
const port = 8080;
const applicationName = "Node express typescript server";

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`${applicationName} started at http://localhost:${port}`);
});