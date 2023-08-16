require("dotenv").config();
require("./DB/connection");

const express = require("express");
const cors = require("cors");
const router = require('./Routes/router')

const server = express();

server.use(cors());
server.use(express.json());
server.use(router)

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => {
   console.log("Server Running");
});
