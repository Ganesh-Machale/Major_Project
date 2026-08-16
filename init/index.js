const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require(".models/listing.js");
const { init } = require("../Models/listing");

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

    const initDB = async () =>{
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data);
        console.log("data was initialized");
    }