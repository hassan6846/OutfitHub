const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const { ErrorHandler } = require("../utils/errorhandler");

// Middleware for user authentication
exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.AccessToken;

    if (!token) {
      res.status(404).json({
        sucess: "false",
        MSG: "YOU NEED TO /Login/register for view this Content"
      })
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData._id);
    console.log(req.cookies.AccessToken)
    next();
  } catch (err) {
    next(err);
  }
};

// Middleware for checking user roles and authorizing access
exports.authorizeRoles = (...roles) => {a
  return (req, res, next) => {
    if (!roles.includes(req.cookies.AccessToken.role)) {
      return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403));
    }
    next();
  };
};
