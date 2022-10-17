const storyController = require("../controller/storyController");
const router = require("express").Router();
const upload = require("../utils/multer")

//add story
router.post('/uploadStory',upload.single('image'),storyController.addStory);

//update story

router.put("/updateStory/:id",storyController.updateStory);

//get all story 
router.get("/getAllStory",storyController.getAllStory);

//get a story
router.get("/getOneStory/:storyId",storyController.getOneStory);

//delete a story
router.delete("/:storyId",storyController.deleteStory);

module.exports = router;






















