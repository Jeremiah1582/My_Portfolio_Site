const mongoose = require("mongoose")
const Schema = mongoose.Schema

const creationDate = new Date()

const MessageSchema = {
    subject: String,
    author: String,
    recipient: {type: String, default:"jeremiah.1582@googlemail.com"},
    email: String, 
    company: String, 
    message: String,
    created: {type: String, default: creationDate}
}

const Message = mongoose.model("Message", MessageSchema);

module.exports= Message