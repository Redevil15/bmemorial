const express = require('express')
const multer = require('multer')
const path = require('path')
const imagesController = require('../controllers/images-controller.js');
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

console.log('Imported uploadImages is a', typeof imagesController.uploadImages);


const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
})

router.post('/upload', upload.array('files', 10), imagesController.uploadImages);
router.get('/getImage', imagesController.getImage)


module.exports = router