const DataURIParser = require("datauri/parser");
const path = require("path");

const getDataUri = (file) => {
    const parser = new DataURIParser();
    const extName = path.extname(file.originalname).toString(); // Corrected spelling
    return parser.format(extName, file.buffer); // Use file.buffer to get the file content
};

module.exports = getDataUri;
