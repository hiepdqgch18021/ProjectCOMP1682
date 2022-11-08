
const cloudinary = require("../utils/cloundinary")
const Story = require("../model/storyModel");
const User = require("../model/userModel")

const storyController = {

    //add story
    addStory: async(req,res)=>{
        try {        
            if(req.file){
            const storyImage = await cloudinary.uploader.upload(req.file.path,{folder:"imageStory"});         
            //create instance of story
            const newStory = new Story
            ({
                storyType:req.body.storyType,
                storyTitle: req.body.storyTitle,
                storyContent:req.body.storyContent,
                storyPhotos:storyImage.secure_url,
                cloudinaryID: storyImage.public_id,
                userID: req.user.id,
            });
            //save user
            await newStory.save();
            return res.status(200).json(newStory);
        }
        const newStory = await Story({
            storyType:req.body.storyType, 
            storyTitle: req.body.storyTitle,
            storyContent:req.body.storyContent,
            userID: req.user.id
        })
        await newStory.save();
        return res.status(200).json(newStory);
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
            const story = await Story.find().populate("userID","username email imageAvatar");
            res.status(200).json(story);
        } catch (error) {
            return res.status(500).json(error);
 
        }
    }, 



    getAllIndividualStory:async(req,res)=>{
        try {
            const {id} = req.params;
            console.log(id)
            const story = await Story.find({ userID: id },{__v:0});
            const user = await User.findById(id,{password:0,__v:0,admin:0,createdAt:0,updatedAt:0});
            res.status(200).json({story: story, user: user});
        } catch (error) {
            return res.status(500).json(error);
 
        }
    }, 

    getOneTypeStory:async(req,res)=>{
        try {
            const {type} = req.params;
            console.log(type)
            const story = await Story.find({ userID: type },{__v:0});
            const user = await User.findById(id,{password:0,__v:0,admin:0,createdAt:0,updatedAt:0});
            res.status(200).json({story: story, user: user});
        } catch (error) {
            return res.status(500).json(error);
 
        }
    }, 



    // get a story
    getOneStory: async(req,res)=>{ 
        try {
            const story = await Story.findById(req.params.id);
            res.status(200).json(story);
        } catch (error) {
            return res.status(500).json(error);
        }
    }, 
    
    //delete story
    deleteStory: async(req,res)=>{
        try {
            await Story.findByIdAndDelete(req.params.id); 
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






















