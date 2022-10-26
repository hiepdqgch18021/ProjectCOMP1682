const topicController = require('../controller/adminController');
const router = require("express").Router();
const middlewareController = require("../controller/middlewareController");

router.post('/addTopic',topicController.addTopic) //middlewareController.verifyToken,

router.delete('/deleteTopic/:id',topicController.deleteTopic) //,middlewareController.ver

router.get('/getAllTopics',topicController.getAllTopics) //,middlewareController

module.exports = router;






















