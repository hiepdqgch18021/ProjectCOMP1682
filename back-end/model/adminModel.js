const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
    
});

let Admin = mongoose.model('Admin',TopicSchema)
module.exports =  Admin;






















