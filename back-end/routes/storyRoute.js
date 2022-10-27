const storyController = require("../controller/storyController");
const router = require("express").Router();
const upload = require("../utils/multer")
const middlewareController = require("../controller/middlewareController");

//add story
router.post('/uploadStory',middlewareController.verifyToken,upload.single('storyImage'),storyController.addStory);

//update story
router.put("/updateStory/:id",storyController.updateStory);

//get all story 
router.get("/getAllStory",storyController.getAllStory);

//get a story
router.get("/getOneStory/:id",storyController.getOneStory);

//delete a story
router.delete("/deleteStory/:id",storyController.deleteStory);

module.exports = router;






















