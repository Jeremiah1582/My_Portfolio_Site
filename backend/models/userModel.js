const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUser= new Schema({
  accountType: {
      type:String
  },
  firstName: {
      type:String
  },
  lastName:{
      type:String
  }, 
  email:{
      type:String
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
      date: Date.now
  },
  aboutUser: {
      type:String
    },
  workExperience:[{
      startDate: {type:Date},
      endDate: {type:Date},
      companyName: {type: String},
      position: {type:String},
      responsibilities: {type:String},
  }]

})

const User = mongoose.model("User", newUser)

module.exports= User 

