const ImagesModel = require('../models/images');

exports.uploadImages = (req, res) => {
  // Check if the files were uploaded successfully
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // Map over received files to extract their paths
  const imagePaths = req.files.map(file => file.path);

  // Create a new document in the MongoDB database
  ImagesModel.create({ image: imagePaths })
    .then(() => {
      res.send("File uploaded successfully");
      console.log("Uploaded successfully");
    })
    .catch(err => {
      console.error("Error during file upload to the database:", err);
      res.status(500).send("Error uploading files to the database.");
    });
};

console.log('uploadImages is a: ', typeof exports.uploadImages);


