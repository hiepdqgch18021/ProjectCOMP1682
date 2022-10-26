const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    }
});

let Admin = mongoose.model('Admin',TopicSchema)
module.exports =  Admin;






















