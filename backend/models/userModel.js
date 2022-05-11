const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSignupDate = new Date()
console.log(userSignupDate);


const UserSchema= new Schema({
  accountType: {
      type:String, 
      default: "user"
  },
  firstName: {
      type:String,
      default:""
  },
  lastName:{
      type:String,
      default:""
  }, 
  title:{
      type:String,
      default:""
  },
  email:{
      type:String,
      unique: true,
      lowercase: true
  },
  mobile: {
      type:String,
      default:""
  }, 
  location:{
      type:String,
      default:""
    },
  github:{
      type:String,
      default:"No GitHub Link"
  },
  linkedin:{
      type:String,
      default:"no Linkedin link"
  },
  facebook:{
      type:String,
      default:""
    }, 
  instagram:{
      type:String,
      default:""
    }, 
  otherSocials:{
        type:String,
        default:""
    }, 
  otherWebsites:[
      String
  ], 
  profilePic: {
      type: String, 
      default: ""
  },
  password: {
      type: String,
      required: true
  },
  signupDate:{
      type: String,
      default: userSignupDate
  },
  aboutUser: {
      type:String,
      default:""
    },
  workExperience:[]
    

})

const User = mongoose.model("User", UserSchema)

module.exports= User 

