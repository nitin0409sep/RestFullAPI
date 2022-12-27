const express = require('express');

const app = express();

const port = process.env.PORT || 80;

// MongoDB connection
require("./db/conn");

const router = require("./db/routers/men");

// Model
const MensRanking = require("./db/models/mens");

// Middleware -: If u want to use json format data in express
app.use(express.json());


app.use(router);

app.listen(port, () => {
    console.log(`Server Started Successfully at ${port}`);
})