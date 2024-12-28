const RateLimit = require("express-rate-limit")
const LoginRequestLimits = RateLimit({
    windowMs: 60 * 60 * 1000, // 1hrs
    limit: 10,
    standardHeaders: 'draft-7', // Set `RateLimit` and `RateLimit-Policy` headers
    legacyHeaders: false,
    message: { message: 'Too many Requests from this IP, please try again after an hour, Kindly Dont Spam Server' }

})


const ForgotPasswordLimit = RateLimit({
    windowMs: 60 * 60 * 1000, 
    limit: 5,
    standardHeaders: 'draft-7', 
    legacyHeaders: false,
    message: { message: 'Dont Spam Server Try Again in  1-Hour' }
});
module.exports = {LoginRequestLimits,ForgotPasswordLimit}