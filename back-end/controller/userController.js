const { addListener } = require('../model/userModel');
const cloudinary = require("../utils/cloundinary")
const User = require('../model/userModel');
const userController = {

    //get all users
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    searchUser: async (req, res) => {
        const search = req.query.search;
        const regex = new RegExp(search, 'i');
        try {
            const user = await User.find({ name: regex }, { password: 0, __v: 0, admin: 0, createdAt: 0, updatedAt: 0, email: 0, DoB: 0, followers: 0, followings: 0, aboutMe: 0 });
            if (!user) {
                await User.find({ username: regex }, { password: 0, __v: 0, admin: 0, createdAt: 0, updatedAt: 0, email: 0, DoB: 0, followers: 0, followings: 0, aboutMe: 0 });
            }
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //get one user
    getOneUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    //delete one user
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("delete user successfully");
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    updateUserInfo: async (req, res) => {
        try {
            const { name, DoB, aboutMe } = req.body;

            await User.findOneAndUpdate({ _id: req.user.id }, { name: name, DoB: DoB, aboutMe: aboutMe });
            res.status(200).json("update success")
        } catch (error) {
            console.log(error);
        }
    },

    // follow a user
    follow: async (req, res) => {
        if (req.body.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);
                if (!user.followers.includes(req.body.userId)) {
                    await user.updateOne({ $push: {followers: req.body.userId} });
                    await currentUser.updateOne({ $push: {followings: req.params.id} })
                    res.status(200).json("user has been followed")
                } else {
                    res.status(403).json("you already follow this user")
                }
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(403).json("you can't follow yourself")
        }

    },

    //unFollow a user
    unFollow: async (req, res) => {
        if (req.body.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);
                if (user.followers.includes(req.body.userId)) {
                    await user.updateOne({ $pull: {followers: req.body.userId} });
                    await currentUser.updateOne({ $pull: {followings: req.params.id} })
                    res.status(200).json("user has been unFollowed")
                } else {
                    res.status(403).json("you don't Follow this user yet!")
                }
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(403).json("you can't follow yourself")
        }

    },

    //get friend

    getFriend: async(req, res)=>{
        try {
            const user  = await User.findById(req.params.userId);
            const friends = await Promise.all(
                user.followings.map(friendId =>{
                    return User.findById(friendId)
                })
            )
            let friendList = []
            friends.map(friend =>{
                const {_id,name,imageAvatar,username} = friend;
                friendList.push({_id,name,imageAvatar,username})
            });
            res.status(200).json(friendList)
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

module.exports = userController
































