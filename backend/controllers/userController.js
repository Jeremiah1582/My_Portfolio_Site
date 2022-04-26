const User = require('../models/userModel')

exports.registerNewUser=(req,res)=>{
    console.log(req.body);
   const {
       email,
       password 
   } = req.body;

//    user.save()
}

exports.readUser = (req,res)=>{
    // Access database information 

User.findOne({email:"jeremiah.1582@googlemail.com"})
    .then((err,doc)=>{
      if (err!=="") {
            console.log("there was an error retrieving document from database", err)
        }else{
            console.log("found document successfully in database ",doc);
            res.status(200).json({msg:"this is a message from back",doc})
        }        
    })  
}

exports.logIn = (req,res)=>{
    // login
}

exports.editUserInfo = (req,res)=>{
console.log('hello');
    // Change, edit and update user information 
}

exports.deleteUser = (req,res)=>{
    // delete user 
}