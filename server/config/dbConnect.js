const mongoose = require("mongoose");
//main DBConnnect Function..
async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
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
module.exports = { connectDb }