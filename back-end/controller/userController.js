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

//add user information------------------------------------------------------------------------------------------

// getAllUsersInfo:async(req,res)=>{
//     try {
//         const usersInfo= await UserInfo.find();
//         res.status(200).json(usersInfo);
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// },

// getOneUserInfo:async(req,res)=>{
//     try {
//         const userInfo= await UserInfo.findById(req.params.id);
//         res.status(200).json(userInfo);
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// },

// addUserInfo:async(req,res)=>{
// try {  
//     const userAvatar = await cloudinary.uploader.upload(req.file.path,{folder:"userAvatar"});
//     const userInfo = new UserInfo
//     ({
//         name:req.body.name,
//         DoB:req.body.DoB,
//         imageAvatar:userAvatar.secure_url,
//         cloudinaryID: userAvatar.public_id
//     })
//     //save info
//     await userInfo.save();
//     res.status(200).json(userInfo);
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// },

// updateUserInfo:async(req, res)=>{
//     try {
//         const info = await UserInfo.findById(req.params.id);
//         await info.updateOne({$set:req.body});
//         res.status(200).json("update user's information success");
//     } catch (error) {
//         res.status(500).json(error);
//     }
// },

// //delete user info

// deleteUserInfo: async(req, res)=>{
//     try {
//          await UserInfo.findByIdAndDelete(req.params.id);
//          res.status(200).json("delete information success");
//     } catch (error) {
//         return res.status(500).json(error);

//     }
// }




}

module.exports = userController
































