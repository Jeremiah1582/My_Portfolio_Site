const User = require('../models/userModel')

exports.registerNewUser=(req,res)=>{
    console.log("reg new usser. user controller L:4 ",req.body);
   const {
       email,
       password 
   } = req.body; 

   if (req.body){
       const newUser= new User(req.body)
        newUser.save((err,doc)=>{ 
       if (err){
           console.log('there was an error L:13 usercontroller', err);
           throw err;
        //    console.log(err);
       }else if (doc){
           console.log("L:18 controller",doc);
           res.status(200).json({msg:"New User Saved- msg froom backend saved function. userController L:16"})
       } else{
           res.status().json({msg:"there was a problem in the registerNewUser in the userController L:20"})
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
console.log('hello edit user information' );
    // Change, edit and update user information 
}

exports.deleteUser = (req,res)=>{
    // delete user 
}