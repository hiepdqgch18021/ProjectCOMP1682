const storyController = require("../controller/storyController");
const router = require("express").Router();
const upload = require("../utils/multer")

//add story
router.post('/uploadStory',upload.single('image'),storyController.addStory);

//update story

router.put("/:id",storyController.updateStory);

//get all story 
router.get("/",storyController.getAllStory);

//get a story
router.get("/:storyId",storyController.getOneStory);

//delete a story
router.delete("/:storyId",storyController.deleteStory);

module.exports = router;






















