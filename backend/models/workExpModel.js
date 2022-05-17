const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkExpSchema= new Schema({
      
      startDate: String,
      endDate: String,
      companyName: String,
      position: String,
      responsibilities: String

})

const WorkExp = mongoose.model("WorkExp", WorkExpSchema )
module.exports = WorkExp