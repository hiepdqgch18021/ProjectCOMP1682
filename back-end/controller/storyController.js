
const cloudinary = require("../utils/cloundinary")

const Story = require("../model/storyModel");

const storyController = {

    //add story
    addStory: async(req,res)=>{
        try {            
            const storyImage = await cloudinary.uploader.upload(req.file.path,{folder:"imageStory"});
            console.log(storyImage);

            //create instance of story
            let newStory = new Story({
                storyTitle: req.body.storyTitle,
                storyContent:req.body.storyContent,
                storyPhotos:storyImage.secure_url,
                cloudinaryID: storyImage.public_id
            });
            //save user
                await newStory.save();
                res.status(200).json(newStory);
        } catch (error) {
            return res.status(500).json(error);
        }
    } ,

    //change story content
    updateStory:async(req,res)=>{
        try {
            const story = await Story.findById(req.params.id);
            await story.updateOne({$set:req.body});
            res.status(200).json("update a story success");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // get all story
    getAllStory:async(req,res)=>{
        try {
            const story = await Story.find();
            res.status(200).json(story);
        } catch (error) {
            return res.status(500).json(error);
 
        }
    }, 

    // get a story
    getOneStory: async(req,res)=>{ 
        try {
            const story = await Story.findById(req.params.storyId);
            res.status(200).json(story);
        } catch (error) {
            return res.status(500).json(error);
        }
    }, 
    
    //delete story
    deleteStory: async(req,res)=>{
        try {
            await Story.findByIdAndDelete(req.params.storyId); 
            res.status(200).json("delete success");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};
module.exports = storyController;

// addStory: async(req,res)=>{
    //     try {
    //     const {storyTitle, storyContent} = req.body;
    //     console.log(req.body);
    //     const fileImage = req.files.map(({ filename, mimetype }) => ({
    //         filename: 'http://localhost:5000/uploadFile/' + filename, mimetype,
    //     }));
    //     const newStory = new Story({
    //         storyTitle,
    //         storyContent,
    //         fileImage
    //     });
    //     const saveStory = await newStory.save();
    //     return res.status(200).json(saveStory);
        
    //     } catch (err) {
    //     console.log(err);
    //     return res.status(500).json(err);
    // }
    // },






















