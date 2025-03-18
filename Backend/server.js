const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/connect");
const authroutes = require("./Routes/authroutes.js")
const agentroutes = require("./Routes/agentRoutes.js")
const uploadroutes = require("./Routes/uploadsRoutes.js")
const dotenv = require("dotenv").config();
const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.get('/', (req, res) => {
    res.send("Hello world");
});


app.use('/api/auth', authroutes);
app.use('/api/agent', agentroutes);
app.use('/api/upload', uploadroutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
})