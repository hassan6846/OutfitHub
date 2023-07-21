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
const {isAuthenticated,authorizeRoles} =require("../middlewares/Auth")
const { registerUser, loginUser,Userlogout,getAllUser} = require("../Controllers/UserControllers")
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(Userlogout);

router.route("/password/forgot").post();
router.route("/password/reset/:token").put();

// router.route("/me").get()
// router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// router.route("/me/update").put(isAuthenticatedUser, updateProfile);
//get all users --admin
 router
 .route("/admin/users")
 .get(isAuthenticated,authorizeRoles("admin"),getAllUser)


// router
//   .route("/admin/user/:id")

//   .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router