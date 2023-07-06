const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

// registeruser
export  async function registerUser(req, res) {
  try {
    // Getting user email, username, password
    const { email, username, password } = req.body;
    // Checking fields
    if (!email || !username || !password) {
      return res.status(204).json({
        success: false,
        msg: "Kindly fill all required fields",
      });
    }
    // Check if userName exists
    const existUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, function (err, user) {
        if (err) reject(new Error(err));
        if (user) reject({ error: "Please use a unique username" });
        resolve();
      });
    });

    // Check for existing email
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, function (err, email) {
        if (err) reject(new Error(err));
        if (email) reject({ error: "Please use a unique email" });
        resolve();
      });
    });

    // All promises
    Promise.all([existUsername, existEmail])
      .then(async () => {
        if (password) {
          try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new UserModel({
              username,
              password: hashedPassword,
              email,
            });

            // Return save result as a response
            user
              .save()
              .then((result) =>
                res.status(201).send({ msg: "User registered successfully" })
              )
              .catch((error) => res.status(500).send({ error }));
          } catch (error) {
            return res.status(500).send({
              error: "Unable to hash password",
            });
          }
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}


