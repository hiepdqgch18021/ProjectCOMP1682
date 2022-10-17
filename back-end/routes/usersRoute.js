const router = require("express").Router();
const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController")
const upload = require("../utils/multer")
router.get("/",(req,res) => {
    res.send("this is user route")
})

//get all user
router.get("/getAllUsers",userController.getAllUsers); //,middlewareController.verifyToken

//get one user
router.get("/getOneUsers/:id",userController.getAllUsers); 

//delete one user 
router.delete("/deleteUser/:id",userController.deleteUser); //,middlewareController.verifyTokenAndAdminAuth

//----User information--------------------------------------------------------------------------------------------
router.post("/addUserInfo",upload.single('image'),userController.addUserInfo);

router.put('/updateUserInfo/:id',userController.updateUserInfo);


module.exports = router ;



















