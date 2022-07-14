const express = require("express")
const app = express()
const mongoose =require("mongoose")
const cors = require("cors")
require("dotenv").config();
const {authenticateToken} =require("./auth/authUser")
const session =require("express-session")
const multer = require("multer")
const ImageModel = require("./models/imgModel")


// import Routes
const indexRoutes = require("./routes/indexRoutes")
const userRoutes = require("./routes/userRouter")
const adminRoutes = require("./routes/adminRouter")

const PORT = 5001

// middleware settings
app.use(cors());
app.use(express.static(__dirname + "/Public"));
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


// Database settings

const DB_NAME= process.env.DB_NAME;
const MONGO_LINK = process.env.ONLINE_MONGO_LINK;

mongoose
  .connect(MONGO_LINK + DB_NAME, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongoose connected to database. server L:29 ");
  })
  .catch((err) => console.log("lost connection ", err));


// Multer Settings -----------

// Multer Disk Storage
const fileStorageEngine = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
    console.log("file.originalname....", file.originalname);
  },
});

// ---multer file upload destination
const upload = multer({ dest: "./uploads" });

// Routes
app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/admin", authenticateToken, adminRoutes);
app.post("/upload", upload.single("uploaded_file"), (req, res, next) => {
  console.log("function was called, upload! REQ is...", req.file, req.body);
  // const newImage = new ImageModel({
  //   image: req.file
  // })
  // newImage.save().then(()=>{
  //   console.log("new image save to the database !!");
  // })
});
app.get("*", (req, res)=>{
    res.status(404).send("Page not found. Check the link and try again")
})

app.listen(PORT, ()=>{
console.log('you are connected to port '+ PORT);
})
