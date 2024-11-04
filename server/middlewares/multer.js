// middlewares/multer.js
const multer = require("multer");

// Use memoryStorage to store the file in memory as a buffer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
      }
});

// Configure multer with storage and limits
const upload = multer({
    storage: storage,
    limits:{
      fileSize:1024*1024*6
    }
})// 'file' should match the field name in your form

module.exports = upload;
