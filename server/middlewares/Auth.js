const jwt = require("jsonwebtoken");


const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};


const isAuthorized = (requiredRole) => (req, res, next) => {
    
    if (!req.user.role || !req.user.role.includes(requiredRole)) {
        return res.status(403).json({
            success: false,
            message: "Access denied.",
        });
    }
    next();
};

module.exports = { isAuthenticated, isAuthorized };
