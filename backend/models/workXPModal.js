const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkXpSchema= new Schema({
      
      startDate: Date,
      endDate: Date,
      companyName: String,
      position: String,
      responsibilities: String

})

const workExperience = mongoose.modal("workExperience", WorkXpSchema )
module.exports = workExperience