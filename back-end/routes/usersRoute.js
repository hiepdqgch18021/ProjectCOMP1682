const router = require("express").Router();
const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController")
const upload = require("../utils/multer")
router.get("/",(req,res) => {
    res.send("this is user route")
})

//get all user
router.get("/getAllUsers",userController.getAllUsers); //,middlewareController.verifyToken


router.get("/searchUser",userController.searchUser); //,middlewareController.verifyToken

//get one user
router.get("/getOneUsers/:id",userController.getOneUser); //,middlewareController.verifyToken

//update one user info

router.put("/updateOneUser/:id",middlewareController.verifyToken,userController.updateUserInfo)


//delete one user 
router.delete("/deleteUser/:id",middlewareController.verifyTokenAndAdminAuth,userController.deleteUser); //,middlewareController.verifyTokenAndAdminAuth


module.exports = router ;



















