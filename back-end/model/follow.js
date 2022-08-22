const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    followings:[{
        type: Number,
    }],
    followers:[{
        type: Number, 
    }]
});
let Follow = mongoose.model("Follow",followSchema);
module.exports = Follow;

























