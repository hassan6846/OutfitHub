const app = require("./app");
const { connectDb } = require("./config/dbConnect");

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on ${process.env.PORT}`)
})