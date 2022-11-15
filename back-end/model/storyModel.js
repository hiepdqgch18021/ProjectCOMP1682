const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    storyType:{
        type: String,
        required: true 
    },
    storyTitle:{
        type: String,
        required: true 
    },
    storyContent:{
        type: String,
        required: true,
    },
    storyPhotos:{
        type: String,
    },
    cloudinaryID:{
        type: String,
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment' 
    }],

    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true}
);

const commentSchema = new mongoose.Schema({
    comment:{
       type: String,
    },
   
    userID:{
       type: mongoose.Schema.Types.ObjectId,
       ref:'User'
   },
   storyID:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Story'
   }
   },{timestamps:true}
   )
   
   
let Comment = mongoose.model('Comment',commentSchema); 
let Story = mongoose.model('Story',storySchema); 

module.exports = {Story, Comment};






