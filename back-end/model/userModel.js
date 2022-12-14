const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true, 
        minlength:3,
        maxlength:30 ,
        unique: true
    },

    password:{ 
        type: String,
        minlength:6,              
        maxlength:255,
        required: true,
       
     },
    email:{ 
        type: String, 
        required: true,
        minlength:12,
        maxlength:50,
        unique: true
    },
    admin:{
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default:""
    },
    DoB:{
        type: String,
        default: ""
    },

    imageAvatar:{
        type: String,
        default:""
    }, 
    followers: {
        type: Array,
        default: [],
      },

    followings: {
        type: Array,
        default: [],
      },
    aboutMe:{
        type: String,
        default:"some thing about me"
    } 
    
},{timestamps:true}
);
let User = mongoose.model('User',userSchema); 
module.exports = User;
 
 
















