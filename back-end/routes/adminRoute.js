const topicController = require('../controller/adminController');
const router = require("express").Router();
const middlewareController = require("../controller/middlewareController");

router.post('/addType',topicController.addType) //middlewareController.verifyToken,

router.delete('/deleteType/:id',topicController.deleteType) //,middlewareController.ver

router.get('/getAllTypes',topicController.getAllTypes) //,middlewareController

module.exports = router;






















