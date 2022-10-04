const { addListener } = require('../model/userModel');
const User = require('../model/userModel')

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
































