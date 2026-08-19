const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const Listing = require("./models/listing.js");
 const path = require("path");


 app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

 const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


 app.get("/",(req,res)=>{
    res.send("Hi, i am Root");
 });
    
    //  Index Route 
    app.get("/listing", async(req,res)=>{
          const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    });

    // New Route
     app.get("/listing/new", (req,res)=>{
      res.render("listings/new.ejs");
     });

    //  Show Route 
    app.get("/listing/:id",async(req,res)=>{
   let { id } = req.params;
       let listing = await Listing.findById(id);
      res.render("listings/show.ejs", {listing});
      
     });

    //  My Own logic rather then copy
     //Create list Route



  //    app.post("/listing",async(req,res)=>{
  //  let {id,title,description,price,location,country} = req.body;
  //      const newListing = await Listing.insertOne({ 
  //       title:title,
  //        description:description,
  //        price:price,
  //        location:location,
  //        country:country,
  //      });
  //      newListing.save().then((res)=>{
  //       console.log(res);
  //      })
  //      .catch((err)=>{
  //       console.log(err);
  //      });
  //      res.redirect("/listing");
       
  //    });




  //Create list Route by Mam logic
     app.post("/listing",async(req,res)=>{
        const newlisting  = new Listing(req.body.listing);
        await newlisting.save();
       res.redirect("/listing");
        console.log(newlisting);
     });


      
//  app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

  app.listen(8080,(req,res)=>{
    console.log("Server is Runing on port 8080");
  });