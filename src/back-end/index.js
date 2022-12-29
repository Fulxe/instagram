const cors = require("cors");
const { res, req } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const port = 1000;
const router = require("./router");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);


const connect = require("./db.js")
const UserModel =  require("./model")
connect()

app.listen(port , () => {
    console.log(`server running at location:${port}`)
})