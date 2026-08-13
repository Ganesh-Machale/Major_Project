const express = require("express");
const app = express();
const mongoose = require("mongoose");


  let port = 8080;
  let Mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

  main()
  .then(()=>{
    console.log("successfully Connected to DB");
  })
  .catch((err)=>{
    console.log(err);
  })
  async function main(){
    await mongoose.connect(Mongo_url);
  }

  app.listen(port,(req,res)=>{
     console.log("Port is Runing on :",port);
  });