//user_login
//user_signup/register
//logout 
// refresh auto login
// geting commnets by product id 
/**
 * import of controllers by destucturing
 */
const express=require("express")
const router=express.Router();
const {registerUser,loginUser}  =require( "../Controllers/UserControllers")
router.route("/register").post(registerUser)
 router.route("/login").post(loginUser)
// router.route("/logout").get(logout);

// router.route("/password/forgot").post();
// router.route("/password/reset/:token").put();

// router.route("/me").get()
// router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// router
// .route("/admin/users")
// .get()


// router
//   .route("/admin/user/:id")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports=router