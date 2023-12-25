const Userlogout = async (req, res, next) => {
  // Set the cookie with an expiration time of 12 seconds
  res.cookie("AccessToken", null, {
    expires: new Date(Date.now()), // Add 12000 milliseconds (12 seconds) to the current time
    httpOnly: true,
    secure: true,
    path: "/",
  });
  res.status(200).json({
    success: true,
    message: "Logged Out Sucessfully",
  });
};
module.exports = { Userlogout };
