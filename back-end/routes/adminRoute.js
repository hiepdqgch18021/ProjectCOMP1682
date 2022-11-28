const topicController = require('../controller/adminController');
const router = require("express").Router();
const middlewareController = require("../controller/middlewareController");

router.post('/addType',middlewareController.verifyToken,middlewareController.verifyTokenAndAdminAuth,topicController.addType) //middlewareController.verifyToken,

router.delete('/deleteType/:id',middlewareController.verifyToken,middlewareController.verifyTokenAndAdminAuth,topicController.deleteType) //,middlewareController.ver

router.get('/getAllTypes',middlewareController.verifyToken,middlewareController.verifyTokenAndAdminAuth, topicController.getAllTypes) //,middlewareController

module.exports = router;






















