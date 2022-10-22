const router = require("express").Router();
const authController = require("../controller/authController");
const middlewareController = require("../controller/middlewareController");
const User = require("../model/userModel")

//register routes
router.post("/register",authController.registerUser);

//login user
router.post("/login",authController.loginUser);

//REFRESH
router.post("/refreshToken",authController.requestRefreshToken);

//log out
router.post("/logout",middlewareController.verifyToken,authController.userLogout);//middlewareController.verifyToken,

router.get("/verifyToken",middlewareController.verifyToken,

async(req,res)=>{
    const user = await User.findById(req.user.id);
    if(!user) return res.status(404).json("this user is not exist");
    res.status(200).json(user)
}

)
module.exports = router ;


















