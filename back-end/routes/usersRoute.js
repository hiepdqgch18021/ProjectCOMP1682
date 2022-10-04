const router = require("express").Router();
const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController")
router.get("/",(req,res) => {
    res.send("this is user route")
})

//get all user
router.get("/getAllUsers",userController.getAllUsers); //,middlewareController.verifyToken


//delete one user 
router.delete("/:id",userController.deleteUser); //,middlewareController.verifyTokenAndAdminAuth




module.exports = router ;



















