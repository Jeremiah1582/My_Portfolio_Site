const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSignupDate = new Date()
console.log(userSignupDate);


const UserSchema = new Schema({
  accountType: {
    type: String,
    default: "user",
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  mobile: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  github: {
    type: String,
    default: "No GitHub Link",
  },
  linkedin: {
    type: String,
    default: "no Linkedin link",
  },
  facebook: {
    type: String,
    default: "",
  },
  instagram: {
    type: String,
    default: "",
  },
  otherSocials: {
    type: String,
    default: "",
  },
  otherWebsites: [String],
  profilePic: {
    type: String,
    default: "no profile picture",
  },
  password: {
    type: String,
    required: true,
  },
  signupDate: {
    type: String,
    default: userSignupDate,
  },
  aboutUser: {
    type: String,
    default: "",
  },
  workExperience: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      imageLink: String,
      companyLink: String,
      startDate: String,
      endDate: String,
      companyName: String,
      position: String,
      responsibilities: String,
    },
  ],
  projects: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      projectLink: String, 
      projectImg:String,
      projectName:String, 
      projectDescription:String,    
      projectStatus: String, 
      dateOfCompletion: Date, 
            
    },
  ],
});

const User = mongoose.model("User", UserSchema)

module.exports= User 

