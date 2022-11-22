
const cloudinary = require("../utils/cloundinary")
const {Story,Comment} = require("../model/storyModel");
const User = require("../model/userModel");

const storyController = {
    //add story
    addStory: async(req,res)=>{
        try {        
            if(req.file){
            const storyImage = await cloudinary.uploader.upload(req.file.path,{folder:"imageStory"});         
            //create instance of story
            const newStory = new Story
            ({
                storyContent:req.body.storyContent,
                storyType:req.body.storyType,
                storyTitle: req.body.storyTitle,
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
            const storyContent = req.body;
            
            console.log(storyContent)

            await Story.findOneAndUpdate({storyContent:storyContent});
            
            res.status(200).json("update a story success");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // get all story
    getAllStory:async(req,res)=>{
        try {
            const story = await Story.find().populate("userID","username email imageAvatar name");
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
            const story = await Story.find({ storyType: type },{__v:0}).populate("userID","imageAvatar name");
            res.status(200).json(story);
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
            res.status(200).json("delete story success");
        } catch (error) {
            return res.status(500).json(error);
        }
    },
};

const commentController={   
    addComment: async(req, res)=>{
        try {
            const {storyID} = req.query;
            const newComment = new Comment
            ({
                comment:req.body.comment,           
                userID: req.user.id,
                storyID:storyID,
            });
            console.log(newComment)
            //save
            await newComment.save();
            return res.status(200).json(newComment);
        } catch (error) {
            
            console.log(error)
            return res.status(500).json(error);
           
        }
    },
    
    getAllComments: async(req, res)=>{
    try {
        const {storyID} = req.query;
        const comment = await Comment.find({ storyID: storyID },{__v:0}).populate("userID","imageAvatar name");       
        res.status(200).json(comment);
    } catch (error) {
        return res.status(500).json(error);
    }
    },
    
    deleteComment: async(req, res)=>{
    try {
        await Comment.findByIdAndDelete(req.params.id); 
        res.status(200).json("delete comment success");

    } catch (error) {
        return res.status(500).json("delete comment fail",error);
    }
    }
    
    }


module.exports = {storyController,commentController};


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






















