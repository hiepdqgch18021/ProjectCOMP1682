const router = require("express").Router();
const authController = require("../controller/authController");
const middlewareController = require("../controller/middlewareController");


//register routes
router.post("/register",authController.registerUser);

//login user
router.post("/login",authController.loginUser);

//REFRESH
router.post("/refreshToken",authController.requestRefreshToken);

//log out
router.post("/logout",middlewareController.verifyToken,authController.userLogout);//middlewareController.verifyToken,

module.exports = router ;


















