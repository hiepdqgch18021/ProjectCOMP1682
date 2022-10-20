const diaryController = require('../controller/diaryController');
const storyController = require('../controller/storyController');
const router = require("express").Router();
const upload = require("../utils/multer")

//add diary
router.post('/uploadDiary',upload.single('diaryImage'),diaryController.addDiary);

//update diary
router.put("/updateDiary/:id",diaryController.updateDiary);

//get all diary

router.get('/getAllDiary',diaryController.getAllDiary);

//get a story
router.get('/getOneDiary/:diaryId',diaryController.getOneDiary);

//delete a Story

router.delete('/:diaryId',diaryController.deleteDiary);


module.exports = router;













