const express = require("express")
const app = express()
const mongoose =require("mongoose")
const cors = require("cors")
require("dotenv").config();

// import Routes
const indexRoutes = require("./routes/indexRoutes")
const userRouter = require("./routes/userRouter")
const PORT = 5001

// middleware settings
app.use(cors());
// app.set('port', process.env.PORT || 5000)


// Database settings
const DB_NAME= process.env.DB_NAME
const MONGO_LINK = process.env.MONGO_LINK ;

mongoose
    .connect( MONGO_LINK + DB_NAME)
    .then(()=>{
        console.log("Mongoose connected to database")
    })
    .catch(err=>console.log('lost connection '));

// Routes
app.use("/", indexRoutes);
// app.use("/user", userRouter) //there is an unknown problem here!!! 

app.listen(PORT, ()=>{
console.log('you are connected to port '+ PORT);
})
