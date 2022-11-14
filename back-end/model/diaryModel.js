const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({


    diaryTitle:{ 
        type: String, 
        required: true 
    },
    diaryContent:{ 
        type: String, 
        required: true 
    },
    diaryPhotos:{
        type: String, 
    },
    

    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },    
},{timestamps:true} 
);

let Diary = mongoose.model('Diary',diarySchema); 
module.exports ={Diary}
















