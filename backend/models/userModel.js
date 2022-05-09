const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema= new Schema({
  accountType: {
      type:String
  },
  firstName: {
      type:String
  },
  lastName:{
      type:String
  }, 
  title:{
      type:String
  },
  email:{
      type:String,
      unique: true,
      lowercase: true
  },
  mobile: {
      type:String
  }, 
  location:{
      type:String
    },
  github:{
      type:String
  },
  linkedin:{
      type:String
  },
  facebook:{
      type:String
    }, 
  instagram:{
      type:String
    }, 
  otherSocials:{
        type:String
    }, 
  otherWebsites:[
      String
  ], 
  profilePic: {
      type: String
  },
  password: {
      type: String
  },
  signupDate:{
      type: Date,
      default: Date.now()
  },
  aboutUser: {
      type:String
    }
    

})

const User = mongoose.model("User", UserSchema)

module.exports= User 

