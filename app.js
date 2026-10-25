const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const listingSchema = require("./Schema.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

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
    

  const validateListing = (req,res,next) =>{
     let {error} = listingSchema.validate(req.body);
      if(error){
          throw new ExpressError (400,error);
      }else{
        next();
      }
  };

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
     app.post("/listing",validateListing, wrapAsync(async(req,res,next)=>{
         const newlisting  = new Listing(req.body.listing);
        await newlisting.save();
       res.redirect("/listing");
     }));

// Edit Route

 app.get("/listing/:id/edit", 
    wrapAsync(async(req,res)=>{
         let { id } = req.params;
         let listing = await Listing.findById(id);
      res.render("listings/edit.ejs",{ listing });
 }));
  
//  Update Route
   app.put("/listing/:id", wrapAsync(async (req,res)=>{
     let { id } = req.params;
     await Listing.findByIdAndUpdate(id,{ ...req.body.listing});
     res.redirect(`/listing/${id}`);
   }));

  //  Delete Route 
    app.delete("/listing/:id", wrapAsync(async (req,res)=>{
       let { id } = req.params;
       await Listing.findByIdAndDelete(id)
       .then((res)=>{console.log(res)})
       .catch((err)=>{
        console.log(err);
       })
       res.redirect("/listing");
    }));
      
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


   
  //  if user comes to the path that not exits 
  app.all("/*splat", (req, res, next) => {
        next(new ExpressError(404,"Page not Found!"));
});

      // Middlewarwe
      app.use((err,req,res,next)=>{
       let {statusCode = 500 , message="Oof , Something went Wrong!"} = err;
         res.status(statusCode).render("listings/error.ejs", {err});
      });

  app.listen(8080,(req,res)=>{
    console.log("Server is Runing on port 8080");
  });