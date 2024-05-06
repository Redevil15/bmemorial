const mongoose = require('mongoose')

const ImagesSchema = new mongoose.Schema({
  image: [String]
})

const ImagesModel = mongoose.model("images", ImagesSchema)
module.exports = ImagesModel