const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    DoB:{
        type: String,
    },

    imageAvatar:{
        type: String,
    },
},{timestamps:true}
);
let UserInfo = mongoose.model('UserInfo',userInfoSchema); 
module.exports = UserInfo;
 
 
















