const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
//initialize express app
const app=express();
//middleware to parse json
app.use(express.json());

//database connection
mongoose
.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("connected to mongodb");
})
.catch((error)=>{
    console.error("error connecting to mongodb")
}