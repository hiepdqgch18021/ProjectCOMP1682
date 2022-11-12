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

//delete one user 
router.delete("/deleteUser/:id",middlewareController.verifyTokenAndAdminAuth,userController.deleteUser); //,middlewareController.verifyTokenAndAdminAuth


//----User information--------------------------------------------------------------------------------------------
// router.post("/addUserInfo",upload.single('imageAvatar'),userController.addUserInfo);
// router.get("/getAllUsersInfo",userController.getAllUsersInfo)
// router.get("/getOneUserInfo/:id",userController.getOneUserInfo)
// router.put('/updateUserInfo/:id',userController.updateUserInfo);

// router.delete('/deleteUserInfo/:id',userController.deleteUserInfo);
module.exports = router ;



















