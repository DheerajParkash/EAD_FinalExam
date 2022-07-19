require('dotenv').config();
const express = require('express')
const mongoose=require('mongoose')
require("./db/conn")
const bookmark=require('./model/useSchema')
const cors=require('cors')
const router=require('./routes/routes')


const app=express();

const port=8003;

app.use(cors());

app.use(express.json())

app.use(router)

app.listen(port,()=>{
    console.log(` Server is start on port number ${port}`)
})