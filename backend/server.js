const express = require("express")
const app = express()
const mongoose =require("mongoose")
const cors = require("cors")
require("dotenv").config();
const {authenticateToken} =require("./auth/authUser")
const session =require("express-session")

// import Routes
const indexRoutes = require("./routes/indexRoutes")
const userRoutes = require("./routes/userRouter")
const adminRoutes = require("./routes/adminRouter")

const PORT = 5001

// middleware settings
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: true, 
    cookie:{secure:true}, 
    maxAge: 60000

  })
);
// app.set('port', process.env.PORT || 5000)


// Database settings

const DB_NAME= process.env.DB_NAME;
const MONGO_LINK = process.env.MONGO_LINK;

mongoose
    .connect( MONGO_LINK + DB_NAME)
    .then(()=>{
        
        console.log("Mongoose connected to database. server L:29 ", ) 
    })
    .catch(err=>console.log('lost connection ', err));


// Routes
app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/admin", authenticateToken, adminRoutes);
app.get("*", (req, res)=>{
    res.status(404).send("Page not found. Check the link and try again")
})

app.listen(PORT, ()=>{
console.log('you are connected to port '+ PORT);
})
