const mongoose = require("mongoose")
const Schema = mongoose.Schema

const creationDate = new Date()

const ImageSchema = new Schema({
    image: {type:String}
})

const ImageModel= mongoose.model("ImageModel", ImageSchema);

module.exports= ImageModel