const validator = require("validator");
const UserModel = require("../../models/UserModel");
const { sendEmail } = require("../../utils/SendMail");

const ForgotPassword = async (req, res, next) => {
  // Requiring Email
  const { email } = req.body;

  // If empty field
  if (!email) {
    return res.status(400).json({
      success: false,
      msg: "Kindly fill all fields",
    });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      msg: "Invalid Email Format.",
    });
  }

  //main 
  try {

    // finding user 
    const FindUserByEmail = await UserModel.findOne({ email });
    //  if not find REGISTERED
    if (!FindUserByEmail) {
      return res.status(404).json({
        success: false,
        //Sucess is false but we dont want to brute force a random Email. Because User can check Weather  email is registered or not. on app.
        msg: "Kindly Check Your inbox or in spam Tab",
      });
    }
    //if founded send node mailer hash url in his gmail box.
    if (FindUserByEmail) {
      res.status(201).json({
        success: true,
        msg: "Kindly Check Your inbox or in spam Tab",
      });
    }


  } catch (err) {
    console.log(err);
    res.json({ errors: err });
  }

  next();
};

module.exports = { ForgotPassword };
