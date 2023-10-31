const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("../utils/errorhandler");

// Middleware for user authentication
exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.AccessToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required to view this content Create Account from  or Login",
      });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedData; // Add user data to the request object for later use
    next();
  } catch (err) {
    next(err);
  }
};


exports.authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required to view this content",
      });
    }

    const userRole = req.user.role;

    if (allowedRoles.includes(userRole)) {
      // User is authorized for the specified roles
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource",
      });
    }
  };
};
