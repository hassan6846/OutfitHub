const mongoose = require('mongoose');

function dbConnect() {
  try {
    mongoose.connect(process.env.DatabaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('DB connected');
        console.log(process.env.DatabaseUrl);
      })
      .catch((err) => {
        console.error('DB connection error:', err);
      });
  } catch (err) {
    console.error('DB connection error:', err);
  }
}

module.exports = dbConnect;
