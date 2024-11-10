const app = require("./app");
const { connectDb } = require("./config/dbConnect");
const { v4: uuidv4 } = require('uuid'); // Importing the uuid package
console.log(uuidv4())
connectDb()
app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on ${process.env.PORT}`)
})