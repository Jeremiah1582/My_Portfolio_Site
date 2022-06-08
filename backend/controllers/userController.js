const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt")
const saltRounds = 10;

const today = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const hour = new Date().getHours();
const mins = new Date().getMinutes();
const time = hour + ":" + mins;

const currentTime = Date();
console.log(currentTime);

//1 login Func

exports.logIn = (req, res) => {
  const { email, password } = req.body.loginDetails; 
  const hashedPassword = bcrypt.hash(password, saltRounds);
  try {
  User.findOne(
    { email: email },
    async (err, result) => {
      if (!result && !err) {
        res.send("email or password were incorrect");
      } else if (err) {
        res.send("error accessing this db information");
        throw err;
      } else if (result) {
        bcrypt.compare(password, result.password, (err, response)=>{
          if (response ===true) {
            const userId = { _id: result._id };
            jwt.sign(userId, "secret", { expiresIn: 60 }, (error, token) => {
              if (token !== null) {
                req.token = token;
                res.status(200).json({ token });
              } else if (error) res.json({ msg: "login failed" });
            });
          }
        })
        
      } else {
        console.log("problem with login function");
        res.json({ msg: "system failure. We are working to fix it" });
      }
    }
  ); 
} catch (error) {}
};
//2 -----------------CREATE FUnctiONs-------------------------------
  
exports.registerNewUser = (req, res) => {
  const { email, password } = req.body.newUser;

  bcrypt.hash(password, saltRounds, function(err, hashedPassword){
  console.log(hashedPassword);
  User.findOne({ email: email }, (errRes, docRes) => {
    if (docRes) {
      res.json({
        msg: "this email already has an account",
        forgotPassword: false,
      });
    } else if (errRes) {
      res.json({ msg: "there was an error in the findOne function in reg func", errRes });
    } else if (!errRes && !docRes && email && password) {
      const newUser = new User({
        email: email,
        password: hashedPassword,
      });
      newUser.save((err, doc) => {
        if (err) {
          console.log("there was an error L:13 usercontroller", err);
          res.status(501).json(err);
          throw err;
          //    console.log(err);
        } else if (doc) {
          res.status(200).json({ msg: "new user created successfully" });
        } else {
          res
            .status(500)
            .json({
              msg: "problem in the registerNewUser in the userController L:81",
            });
        }
      });
    } 
  });
  
  });
};

// -------------------READ FUNCTIOns-------------------


exports.viewOnly = async (req, res) => {
  if (req.user) {
    console.log(
      "UController: this is req.user in readUser function...",
      req.adminUser
    );
  }
  console.log("Ucontroller: req.user is now ...", req.adminUser);
  await User.findById("627a578b73b83221db777e18").then((result) => {
    if (!result) {
      console.log("there was an error retrieving document from database");
    } else if (result) {
      // res.status(200).json({ msg: "from back readUser function!", result });
    } else {
      console.log("no err & no doc from the database");
    }
  });
};

// Test: Find Admin Users Function using $elemMatch ----
exports.findAdmins = (req, res) => {
  User.find(
    //query
    {
      _id: req.body.user._id,
      workExperience: {
        $elemMatch: {
          position: "Engineer",
          companyLink: true,
        },
      },
    },
    // update
    {
      $set: {
        "workExperience.$.lastUpdated": currentTime,
      },
    }
  );
}; //function is untested

// -----------Example Function-------------
// TEST: $elemMatch to find specific object in nested array------
// User.find(
//     { _id: userId },
//     { workExperience:{ $elemMatch: {_id: itemId}}},(err, result) => {
//       if (err) {
//         console.log("this is the err from wrkexp update...",err);
//       }else{
//          console.log(" User.find wrkexp...", result[0])
//       }
//    ;
//   }
//   );---------------------------------------
