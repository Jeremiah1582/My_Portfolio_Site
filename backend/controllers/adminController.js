const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const today = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const hour = new Date().getHours();
const mins = new Date().getMinutes();
const time = hour + ":" + mins;

const currentTime = Date();

// READ---------------------------
 exports.getUser = async (req, res) => {
console.log("getUser func. req.jwtPayload is...", req.jwtPayload);
 User.findById(req.jwtPayload).then((user)=>{
     if (! user) {res.sendStatus(401)}
     res.status(200).json({result:user, msg:"logged in successfully"})
 })


 }
 exports.testFunc = async (req, res) => {
     console.log("test");
     res.json({msg:"adminController: test function is firing"})
 }









//1 CREATE - addWorkExp--------------------
exports.addWorkExp = (req, res) => {
 console.log("getUser func. req.jwtPayload is...", req.jwtPayload);
  console.log("add workExp backend function 2", req.body);

  //!cant use finByIdAndUpdate here, it lets us add 1 obj and then next obj we add overwrites the first
  User.findByIdAndUpdate(
    req.jwtPayload,
    { $push: { workExperience: req.body.workExp } },
    (err, result) => {
      if (err) {
        throw err;
      } else if (result) {
        res.status(200).json({ msg: "Work Experience saved", result });
      } else {
        res.send("nothing was returned");
      }
    }
  );
};



//2 ---------UPDATE FUNCtions--------------------
// UPDATE Doc-------------------------
exports.editUserInfo = (req, res) => {
  // find the document you wish to edit.
  User.findByIdAndUpdate(
    req.jwtPayload,
    req.body,
    async function (err, result) {
      if (err) {
        throw err;
      } else if (result) {
        await res.json(result);
      } else {
        res.sendStatus(401);
      }
    }
  );
};

//3 UPDATE NESTED ARRAY IN MONGO Doc,workExperience Array-------
exports.updateWorkExp = (req, res) => {
  const itemId = req.body.changedState.itemId;
  
  const updatedWrkExp = {
    imageLink: req.body.changedState.imageLink,
    companyLink: req.body.changedState.companyLink,
    startDate: req.body.changedState.startDate,
    endDate: req.body.changedState.endDate,
    companyName: req.body.changedState.companyName,
    position: req.body.changedState.position,
    responsibilities: req.body.changedState.responsibilities,
  };


  console.log("updatedWrkExp is..", updatedWrkExp);

  User.updateOne(
    { _id: req.jwtPayload, "workExperience._id": itemId }, // query
    { $set: { "workExperience.$": updatedWrkExp } } // update
  ).then((result) => {
    if (result) {
      res.json({ msg: "update successful " });
    } else {
      res.json({ msg: "update failed " });
    }
  });
};

// -------------------------------------DELETE FUnctions---------------------------------
//4 DELETE Doc--------------
exports.deleteUser = (req, res) => {
  console.log("delete user", req.body);
  // delete user
};

//5 REMOVE Document-------------------
exports.removeWorkExp = async (req, res) => {
  User.findByIdAndUpdate(
    req.jwtPayload,
    { $pull: { workExperience: { _id: req.body.itemId } } },
    async (err, result) => {
      console.log("item id", req.body);
      if (err) {
        console.log("error deleting the item form workExperience Array", err);
      } else if (result) {
        console.log("this is the result from WrkExperience Array", result);
      }
      console.log(err, result);
    }
  );
  await res.status(200).json({ msg: "Deleted! refresh page to see changes" });
};