const User = require('../models/userModel')

exports.registerNewUser=(req,res)=>{
    console.log(req.body);
   const {
       email,
       password 
   } = req.body;
}

exports.readUser = (req,res)=>{
    // Access database information 
 User.find({})
    .then((err,doc)=>{
        if (err) {
            console.log("there was an error retrieving document from database")
        }else{
            console.log("found document successfully in database ",doc);
            res.json(doc)
        }        
    })
   
 res.json(req, "this is the Read User function in Controller");

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