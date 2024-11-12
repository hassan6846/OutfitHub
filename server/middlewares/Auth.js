const jwt = require("jsonwebtoken");

// isAuthenticated Middleware
const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token; // Retrieve the token from cookies

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded token data (user ID and roles) to req.user
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};

// isAuthorized Middleware
const isAuthorized = (requiredRole) => (req, res, next) => {
    // Check if user roles include the required role
    if (!req.user.role || !req.user.role.includes(requiredRole)) {
        return res.status(403).json({
            success: false,
            message: "Access denied.",
        });
    }
    next();
};

module.exports = { isAuthenticated, isAuthorized };
