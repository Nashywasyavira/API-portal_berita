require('dotenv').config();
const express = require('express');
const app = express();
const profileRouter = require("./api/profile/profile.router");
const beritaRouter = require("./api/berita/berita.router");

app.use(express.json());
app.use("/api/profile", profileRouter);
app.use("/api/berita", beritaRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log("Running on PORT : " + process.env.APP_PORT)
})