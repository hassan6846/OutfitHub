const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;

    // If no token is provided
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }

    try {
        // Decode the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the decoded token directly to the request object (no 'user' wrapper)
        req.role = decoded.role;  // Directly assigning role to the request object
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};

const isAuthorized = (requiredRole) => (req, res, next) => {
    let requiredRole="admin"
    const token = req.cookies.token;

    // If no token is provided
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }

    try {
        // Decode the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.role = decoded.role;  // Directly assigning role to the request object

        // Check if the decoded token contains the required role
        if (!req.role || !Array.isArray(req.role)) {
            return res.status(403).json({
                success: false,
                message: "No role found or role is not an array.",
            });
        }

        // If the required role is in the role array, proceed
        if (req.role.includes(requiredRole)) {
            return next();
        } else {
            // If the required role is not in the roles array, deny access
            return res.status(403).json({
                success: false,
                message: "Access denied: Insufficient role.",
            });
        }
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};

module.exports = { isAuthenticated, isAuthorized };
