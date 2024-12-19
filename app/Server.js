const app = require("./app");
const { connectDb } = require("./config/dbConnect");


connectDb()
app.listen(process.env.PORT||4000,()=>{
    console.log(`Server is Running on ${process.env.PORT}`)
})