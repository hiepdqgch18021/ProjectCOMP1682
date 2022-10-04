const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({

    diaryDate: {
        type: Date,
        default: Date.now
    },
    diaryDateTime: {
        type: Date,
        default: Date.now
    },
    diaryTitle:{ 
        type: String, 
        required: true 
    },
    diaryContent:{ 
        type: String, 
        required: true 
    },
    diaryPhotos:[{
        filename:{ type:String},
        mimetype:{ type:String}
    }],
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },    
},{timestamps:true} 
);

let Diary = mongoose.model('Diary',diarySchema); 
module.exports ={Diary}
















