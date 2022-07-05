const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../auth/jwtTokens");
require("dotenv").config();
const bcrypt = require("bcrypt");
const me = "6284d203e313af05096598a3"


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
 
  const email = req.body.loginDetails.email;
  const password = req.body.loginDetails.password;

  User.findOne({ email: email }).then((result) => {
    const dbPassword = result.password;
    bcrypt.compare(password, dbPassword, (err, passMatch) => {
      if (passMatch === true) {
        const userId = result._id;
        const userToken = generateToken(userId); //jwt comes from here
        req.token = userToken; //present

        res.status(200).json({
          auth: true,
          user: result,
          msg: "Welcome",
          token: userToken,
        });
      
      } else {
        res.status(200).json({
          auth: false,
          user: "",
          msg: "access denied",
        });
      }
    });
  });
};
//2 -----------------CREATE FUnctiONs-------------------------------

exports.registerNewUser = (req, res) => {
  const { email, password } = req.body.newUser;

  bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
    console.log(hashedPassword);
    User.findOne({ email: email }, (errRes, docRes) => {
      if (docRes) {
        res.json({
          msg: "this email already has an account",
          forgotPassword: false,
        });
      } else if (errRes) {
        res.json({
          msg: "there was an error in the findOne function in reg func",
          errRes,
        });
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
          } else if (doc) {
            res.status(200).json({ msg: "new user created successfully" });
          } else {
            res.status(500).json({
              msg: "problem in the registerNewUser in the userController L:81",
            });
          }
        });
      }
    });
  });
};

// -------------------READ FUNCTIOns-------------------

exports.defaultGetUser = async (req, res) => {
 console.log("DefaultGetUser func: is being called ");
  await User.findById(me).then((result) => {
    if (!result) {
      console.log("there was an error retrieving document from database");
    } else if (result) {
      console.log(result);
      res.status(200).json({
        auth: false,
        user: result,
        msg: "you are viewing a default Profile",
        token: null,
      });
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
}; 
// SendEWhatapp Msg
exports.sendWhatsappMsg=(req,res)=>{
const accountSid = process.env.SENDGRID_ACCOUNT_SID;
const authToken = process.env.SENDGRID_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);


const {message, author, email , company}=req.body.msgDetails;
client.messages
  .create({
    body: `
    From: ${author} 
    Company Name: ${company}.
    Message: ${message}
    Contact email: ${email}`,

    from: "whatsapp:+14155238886",
    to: "whatsapp:+491782822679",
  })
  .then((message) => {
    User.findOneAndUpdate(
      { _id: me },
      { $push: { messagesReceived: req.body.msgDetails } }
    ).then(console.log("message has been saved to Jeremiah's message list"));
    res.status(200).json({msg:" your message wass successfully sent"})
  })
  .done();

}
