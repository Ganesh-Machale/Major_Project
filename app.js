const express = require("express");
 const app = express();
 const mongoose = require("mongoose");

 app.get("/",(req,res)=>{
    res.send("Hi, i am Root");
 })

  app.listen(8080,(req,res)=>{
    console.log("Server is Runing on port 8080");
  });