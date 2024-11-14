const User = require("../../models/UserModel");

//get the email 
//create the token and set the reset id token
//set the reset timout date  okaaa(not create by ai mfsss)
//call the nodemialer function inside the function and send the mail

const ForgotPassword = async (req, res, next) => {
   
    //find user if
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        // return next(new ErrorHander("User not found", 404));//
    }
  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();
}
module.exports=ForgotPassword