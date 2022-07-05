const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
const Schema = mongoose.Schema;

const creationDate = new Date();
console.log(creationDate);

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
    default: creationDate,
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
  messagesReceived: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      author: String,
      email: String,
      company: String,
      subject: String,
      message: String,
      dateReceived: {
        type: String,
        default: creationDate,
      },
    },
  ],

  projects: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      projectLink: String,
      projectImg: String,
      projectName: String,
      projectDescription: String,
      projectStatus: String,
      dateOfCompletion: Date,
    },
  ],
});

// encryption:
// UserSchema.plugin(encrypt, { secret: process.env.MONGOOSE_SECRET , encryptedFields: ["password"]}); // password field encrypted here at the schema. //hashed the password instead with md5()

const User = mongoose.model("User", UserSchema);

module.exports = User;
