const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorResponse = require("../utils/errorhandler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const ErrorHandler = require("../utils/errorhandler");
//isAuthenticated true/false
exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  //if token not found
  if (!token) {
    return next(new ErrorResponse("Please login to access this resource", 401));
  }
  //add env Secret to decode
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
});
//checking weather person is admin or not
//giving auth
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
