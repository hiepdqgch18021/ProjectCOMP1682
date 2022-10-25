const diaryController = require('../controller/diaryController');
const router = require("express").Router();
const upload = require("../utils/multer")
const middlewareController = require("../controller/middlewareController");

//add diary
router.post('/uploadDiary',middlewareController.verifyToken,upload.single('diaryImage'),diaryController.addDiary);

//update diary
router.put("/updateDiary/:id",diaryController.updateDiary);

//get all diary

router.get('/getAllDiary',middlewareController.verifyToken,diaryController.getAllDiary);

//get a story
router.get('/getOneDiary/:id',diaryController.getOneDiary);

//delete a Story

router.delete('/:id',diaryController.deleteDiary);


module.exports = router;













