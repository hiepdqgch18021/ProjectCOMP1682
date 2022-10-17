const mongoose = require("mongoose");
// const { PassThrough } = require("nodemailer/lib/xoauth2");

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
        required: true,
        minlength:6,              
        maxlength:255,
       
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
    },
    DoB:{
        type: Date,
    },
    // imageCover:[{
    //     filename:{type: String},
    //     mimetype:{type: String}
    // }],
    imageAvatar:[{
        filename:{type: String},
        mimetype:{type: String}
    }],
},{timestamps:true}
);
let User = mongoose.model('User',userSchema); 
module.exports = User;
 
 
















