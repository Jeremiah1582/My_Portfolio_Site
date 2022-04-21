const User = require('../models/userModel')

exports.registerNewUser=(req,res)=>{
    console.log(req.body);
   const {
       email,
       password 
   } = req.body;
}

exports.readUser = (req,res)=>{
    // Access datacbase information 
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