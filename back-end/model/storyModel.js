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

    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true}
);

let Story = mongoose.model('Story',storySchema); 
module.exports = Story;






