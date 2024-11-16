const User = require("../../models/UserModel");
const ForgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {

  }

  const resetToken = user.getResetPasswordToken();
}
module.exports = ForgotPassword