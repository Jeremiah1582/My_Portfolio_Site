const User = require('../models/userModel')

exports.registerNewUser=(req,res)=>{
    console.log("reg new usser. user controller L:4 ",req.body);
   const {
       email,
       password 
   } = req.body; 

   if (email && password!==""){
       const newUser= new User(req.body)
        new User.save((err,doc)=>{ 
       if (err){
           console.log('there was an error L:13 usercontroller', err);
           throw err
        //    console.log(err);
       }else{
           res.status(200).json({msg:"froom backend saved function. userController L:16"})
       } 
    })
   }

}

exports.readUser = (req,res)=>{
    // Access database information 
    User.findOne({email:"jeremiah.1582@googlemail.com"})
        .then((result)=>{
        if (!result){
                console.log("there was an error retrieving document from database")
            }else if (result){
                console.log("found document successfully in database ",result);
                res.status(200).json({"msg":"from back readUser function!", result})
            } else{
                console.log("no err & no doc from the database");
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