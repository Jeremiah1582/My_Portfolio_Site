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
  console.log("getUser func. req.session is...", req.session);
  const userId = await req.session.jwtPayload.userId;
  const sessToken = await req.session.token;
  try {
    User.findById(userId).then((user) => {
      console.log("getUser func: user is...", user);
      if (!user) {
        res.sendStatus(401);
      }
      res
        .status(200)
        .json({
          auth: true,
          result: user,
          msg: "logged in successfully",
          token: sessToken,
        });
    });
  } catch (error) {
    throw error
  }
};

exports.testFunc = async (req, res) => {
  console.log("req.session.token", req.session.token);
  // console.log("testfunc", req);
  res.json({
    token: req.token,
    msg: "adminController: test function is firing",
  });
};

//1 CREATE - addWorkExp--------------------
exports.addWorkExp = (req, res) => {
  console.log("getUser func. req.body is...", req.body);
  console.log("add workExp backend function 2", req.body);
  //!cant use finByIdAndUpdate here, it lets us add 1 obj and then next obj we add overwrites the first
  User.findByIdAndUpdate(
    req.body,
    { $push: { workExperience: req.body.changedState.workExp } },
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

//2 ---------UPDATE FUNCtions------------------
// UPDATE Doc-------------------------
exports.editUserInfo = (req, res) => {
  // find the document you wish to edit.
  console.log("editUser function body ", req.body);

  User.findByIdAndUpdate(
    req.body.user._id,
    req.body.user,
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
  const userId = req.body.changedState.userId;
  console.log(" req.body  changedState...", req.body);
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
    { _id: userId, "workExperience._id": itemId }, // query
    { $set: { "workExperience.$": updatedWrkExp } } // update
  ).then((result) => {
    if (result) {
      console.log("successful update wrkexp");
      res.json({ msg: "update successful " });
    } else {
       console.log("no result");
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
    req.body,
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
