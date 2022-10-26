const Admin =require("../model/adminModel");

const topicController = {
    addTopic:async(req, res) => {
        try {
            const newTopic = new Admin({
                topic:req.body.topic
            })
            await newTopic.save();
            return res.status(200).json(newTopic);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getAllTopics: async(req,res)=>{
        try {
            const allTopics = await Admin.find()
            res.status(200).json(allTopics);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteTopic: async (req,res)=>{
        try {
            await Admin.findByIdAndDelete(req.params.id)
            res.status(200).json("delete topic success");
        } catch (error) {
            return res.status(500).json(error);

        }
    }
}
module.exports = topicController;




























