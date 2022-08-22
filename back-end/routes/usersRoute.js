const router = require("express").Router();
const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController")
router.get("/",(req,res) => {
    res.send("this is user route")
})

//get all user
router.get("/getAllUsers",middlewareController.verifyToken,userController.getAllUsers);

//delete one user 
router.delete("/:id",middlewareController.verifyTokenAndAdminAuth,userController.deleteUser);




module.exports = router ;



















