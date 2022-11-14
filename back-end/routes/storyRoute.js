const {storyController,commentController} = require("../controller/storyController");
const router = require("express").Router();
const upload = require("../utils/multer")
const middlewareController = require("../controller/middlewareController");

//add story
router.post('/uploadStory',middlewareController.verifyToken,upload.single('storyImage'),storyController.addStory);

//update story
router.put("/updateStory/:id",storyController.updateStory);

//get all story 
router.get("/getAllStory",storyController.getAllStory);

//get all individual story
router.get("/getAllIndividualStory/:id",middlewareController.verifyToken,storyController.getAllIndividualStory);

//getOneTypeStory
router.get("/getOneTypeStory/:type",middlewareController.verifyToken,storyController.getOneTypeStory);

//get a story
router.get("/getOneStory/:id",storyController.getOneStory);

//delete a story
router.delete("/deleteStory/:id",storyController.deleteStory);//middlewareController.verifyToken,

//add comment

router.post("/addComment",middlewareController.verifyToken,commentController.addComment);//,middlewareController.verifyToken

//get all comments

router.get("/getAllComments",middlewareController.verifyToken,commentController.getAllComments);


//delete comments 
router.delete("/deleteComment/:id",middlewareController.verifyToken,commentController.deleteComment);

module.exports = router;






















