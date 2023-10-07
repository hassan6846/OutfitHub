//user_login
//user_signup/register
//logout 
// refresh auto login
// geting commnets by product id 
/**
 * import of controllers by destucturing
 */
const express = require("express")
const router = express.Router();
//middlewares
const  {isAuthenticated,authorizeRoles}  = require("../middlewares/Auth")
//controllers
const {
    registerUser,
    loginUser,
    Userlogout,
    getAllUser,
    GetUsersDetails,
    ForgotPassword
} = require("../Controllers/UserControllers")

//simple actions
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(Userlogout);

//user details and update profile
router.route("/me").get()
router.route("/me/update").put();
//password actions
router.route("/password/forgot").post(ForgotPassword);
router.route("/password/reset/:token").put();
router.route("/password/update").put();

/**
 * add all admin routes below
 */

//get all users --admin
router.route("/admin/users").get(isAuthenticated,authorizeRoles,getAllUser);


//Admin actions on user for doing cruds on users
router
    .route("/admin/user/:id")
    .get()
    .put()
    .delete()
module.exports = router