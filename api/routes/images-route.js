const express = require('express')
const multer = require('multer')
const path = require('path')
const imagesController = require('../controllers/images-controller.js');

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


module.exports = router