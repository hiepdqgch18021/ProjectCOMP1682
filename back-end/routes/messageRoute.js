const router = require("express").Router();
const Message = require("../model/messageModel")


//add 
router.post('/send', async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        const saveMessage = await newMessage.save()
        res.status(200).json(saveMessage);
    } catch (error) {
        res.status(500).json(error);
    }
})

//get

router.get('/get/:conversationId', async (req, res) => {
    try {
        const message = await Message.find({
            conversationId:req.params.conversationId,
        });
        res.status(200).json(message);
        
    } catch (error) {
        res.status(500).json(error);

    }
})


















module.exports = router;





