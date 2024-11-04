// middlewares/multer.js
const multer = require("multer");

// Use memoryStorage to store the file in memory as a buffer
const storage = multer.diskStorage({
    
});

// Configure multer with storage and limits
const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // Limit file size to 50MB
}).single("file"); // 'file' should match the field name in your form

module.exports = upload;
