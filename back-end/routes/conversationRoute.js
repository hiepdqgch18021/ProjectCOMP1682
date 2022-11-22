const router = require("express").Router();
const Conversation = require("../model/conversationModel")

//new conversation
router.post("/send", async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch (err) {
        res.status(500).json(err);
    }
});

//get conversation of the user

router.get("/get/:userId", async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members:{$in:[req.params.userId]},         
        });
res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err);
    }
})




//get conversation of a user




















module.exports = router;