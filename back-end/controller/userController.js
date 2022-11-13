const { addListener } = require('../model/userModel');
const cloudinary = require("../utils/cloundinary")
const User = require('../model/userModel');
const userController ={

    //get all users
    getAllUsers:async(req,res)=>{
        try {
            const user= await User.find();
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }, 

    searchUser:async(req,res)=>{
        const search = req.query.search;   
        const regex = new RegExp(search, 'i');
         try {
             const user= await User.find({name:regex},{password:0,__v:0,admin:0,createdAt:0,updatedAt:0,email:0,DoB:0,followers:0,followings:0,aboutMe:0});
             if(!user) {
                await User.find({username:regex},{password:0,__v:0,admin:0,createdAt:0,updatedAt:0,email:0,DoB:0,followers:0,followings:0,aboutMe:0});
             }
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }, 

    //get one user
    getOneUser:async(req,res)=>{
        try {
            const user= await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    //delete one user
    deleteUser:async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("delete user successfully");          
    } catch (error) {
        return res.status(500).json(error);
    }
    },
}

module.exports = userController
































