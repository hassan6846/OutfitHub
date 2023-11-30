const RateLimit = require("express-rate-limit");

// login Request Limits To Prevent Brute Force Login.
const LoginRequestLimits = RateLimit({
    windowMs: 60 * 60 * 1000, // 1hrs
    limit: 5,
    standardHeaders: 'draft-7', // Set `RateLimit` and `RateLimit-Policy` headers
    legacyHeaders: false,
    message: { message: 'Too many Requests from this IP, please try again after an hour, Kindly Dont Spam Server' }
});
// Forgot Password Limits
const ForgotPasswordLimit = RateLimit({
    windowMs: 60 * 60 * 1000, // 1hrs
    limit: 5,
    standardHeaders: 'draft-7', // Set `RateLimit` and `RateLimit-Policy` headers
    legacyHeaders: false,
    message: { message: 'Dont Spam Server Try Again in  1-Hour' }
});

module.exports = { LoginRequestLimits,ForgotPasswordLimit };
