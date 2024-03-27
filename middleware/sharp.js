const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const optimize = (req, res, next) => {
  if (req.file) {
    const filePath = req.file.path;
    console.log(filePath);
    const imagePath = req.file.path;
    const lastDot = imagePath.lastIndexOf(".");
    const imageName = imagePath.substring(0, lastDot);
    const newExtension = ".webp";
    const newFilePath =  imageName + newExtension;
    req.file.path = newFilePath;
    req.file.filename = newFilePath;
    console.log(newFilePath);

    sharp(filePath)
      .resize(500, 500, { fit: 'inside' })
      .toFormat('webp')
      .toFile(newFilePath, (err, info) => {
        const filename = newFilePath.split(path.sep).pop();
        //fs.unlinkSync(`images/${filename}`)
        console.log(err)
      });
  }
  next();
}

module.exports = optimize;