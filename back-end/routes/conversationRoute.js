const router = require("express").Router();
const Conversation = require("../model/conversationModel")

//new conversation
router.post("/",async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId,req.body.receiverId],
    });
try{
   const savedConversation =  await newConversation.save()
res.status(200).json(savedConversation)
}catch(err){
    res.status(500).json(err);
}
});

//get conversation of the user

router.get("/:UserId",async(req, res)=>{
    try{
const conversation = await Conversation.find()
    }catch(err){
    res.status(500).json(err);
}
})




//get conversation of a user




















module.exports = router;