const diaryController = require('../controller/diaryController');
const storyController = require('../controller/storyController');
const router = require("express").Router();
const upload = require("../utils/multer")

//add diary
router.post('/uploadDiary',upload.single('DiaryImage'),diaryController.addDiary);

//update diary
router.put("/:id",diaryController.updateDiary);

//get all diary

router.get('/',storyController.getAllStory);

//get a story
router.get('/:diaryId',storyController.getOneStory);

//delete a Story

router.delete('/:diaryId',storyController.deleteStory);


module.exports = router;













