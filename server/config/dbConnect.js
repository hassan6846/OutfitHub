const  mongoose  = require("mongoose");
//main DBConnnect Function..
async function connectDb(){
    try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
          .then(() => {
            console.log('DB connected');
          })
          .catch((err) => {
            console.error('DB connection error:', err.message);
          });
      } catch (err) {
        console.error('DB connection error:', err.message);
      }
}
module.exports={connectDb}