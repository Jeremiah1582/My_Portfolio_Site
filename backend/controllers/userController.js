const User = require("../models/userModel");


// -----------------CREATE FUnctiONs-------------------------------

// CREATE Doc----------------------------
exports.registerNewUser = (req, res) => {
  console.log("reg new usser. user controller L:4 ", req.body);
  const { email, password } = req.body;
  if(email && password){
    if (req.body) {
      const newUser = new User(req.body);

      newUser.save((err, doc) => {
        if (err) {
          console.log("there was an error L:13 usercontroller", err);
          throw err;
          //    console.log(err);
        } else if (doc) {
          console.log("L:18 controller", doc);
          res.status(200).json({
            msg: "New User Saved- msg froom backend saved function. userController L:16",
          });
        } else {
          res.status().json({
            msg: "there was a problem in the registerNewUser in the userController L:20",
          });
        }
      });
    }
  }else{
    res.status(500).json({msg:"email or password is missing"})
  }
};
// CREATE - addWorkExp--------------------
exports.addWorkExp = (req, res) => {
  console.log("add workExp backend function 2", req.body);
 
  //!cant use finByIdAndUpdate here, it lets us add 1 obj and then next obj we add overwrites the first
  User.findByIdAndUpdate(req.body.userId, {$push:{"workExperience": req.body.workExp}},  (request, result)=>{
    if(request){
      console.log("this is the request from addWorkExp backend func...",request);
    }else if(result){
      console.log("this is the result of the to send back to theClient side", result);
      res.status(200).json({msg:"Work Experience saved", result})
    }else{
      console.log("nothing was returned from the function addworkExp");
    }
  })
};

 

// -------------------READ FUNCTIOns------------------------------
// READ Doc-----------------
exports.readUser = async (req, res) => {
  // Access database information
  await User.findOne({ email: "david.1582@googlemail.com" }).then((result) => {
    if (!result) {
      console.log("there was an error retrieving document from database");
    } else if (result) {
      // console.log("found document successfully in database ", result);
      res.status(200).json({ msg: "from back readUser function!", result });
    } else {
      console.log("no err & no doc from the database");
      
    }
  });
};

exports.logIn = (req, res) => {
  // login
};
// -----------------------UPDATE FUNCtions-------------------------
// UPDATE Doc-------------------------
exports.editUserInfo = (req, res) => {
  // find the document you wish to edit.
  User.findByIdAndUpdate(req.body._id, req.body, async function (err, result) {
    if (err) {
      console.log(
        "there was an ERR with findbyIdAndUpdate() method in controller",
        await err
      );
      res.send(err);
    } else if (result) {
      console.log("updated DB Doc, new Doc value=", result);
      await res.json(result);
    } else {
      console.log("function called but not working");
    }
  });
};

// UPDATE NESTED ARRAY IN MONGO Doc,workExperience Array-------
exports.updateWorkExp =(req,res)=>{
  console.log("updateWorkExp req.body is..", req.body);
const itemId = req.body.changedState.itemId
const userId = req.body.changedState.userId
 
User.find(
    { _id: userId },
    { workExperience:{ $elemMatch: {_id: itemId}}},(err, result) => {
      if (err) {
        console.log("this is the err from wrkexp update...",err);
      }else{
         console.log(" User.find wrkexp...", result[0])
      }
   ;
  }
  );
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
//   );
}

// -------------------------------------DELETE FUnctions--------------------------------- 
// DELETE Doc--------------
exports.deleteUser = (req, res) => {
  console.log("delete user", req.body);
  // delete user
};

// REMOVE Document-------------------
exports.removeWorkExp = async (req, res) => {

      User.findByIdAndUpdate(req.body.userId, {$pull:{"workExperience": {"_id":req.body.itemId}}}, async (err,result)=>{
        console.log("item id",req.body);
       if(err){
        console.log("error deleting the item form workExperience Array",err);
       }else if(result){
        console.log("this is the result from WrkExperience Array",result);
       }
       console.log(err,result);
  })
  await res.status(200).json({msg:"Deleted! refresh page to see changes"})
 
  };
