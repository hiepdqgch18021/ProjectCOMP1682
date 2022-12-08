const User = require("../model/userModel");
const cloudinary = require("../utils/cloundinary");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let refreshTokens = [];

const authController = {
    //registers
    registerUser: async (req, res) => {

        try {
            let public_id = "";
            let secure_url = "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
            if (req.file) {
                const userImage = await cloudinary.uploader.upload(req.file.path, { folder: "UserAvatar" });
                public_id = userImage.public_id;
                secure_url = userImage.secure_url;
            }
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            // create new user           
            const newUser = await new User({
                email: req.body.email,
                username: req.body.username,
                password: hashed,
                name: req.body.name,
                DoB: req.body.DoB,
                aboutMe: req.body.aboutMe,
                imageAvatar: secure_url,
                cloudinaryID: public_id,
            });
            console.log(newUser)
            //save to database
            const user = await newUser.save();
            console.log(user)
            res.status(200).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json("Register failed ! check your information", error);
        }
    },
    //Generated ACCESS_TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin, //check admin role
            },
            process.env.JWT_ACCESS_TOKEN,
            { expiresIn: "15d" } //due date of jwt
        );
    },
    //Generated REFRESH_TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.JWT_REFRESH_TOKEN,
            { expiresIn: "30d" }
        );
    },
    //login
    loginUser: async (req, res, next) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("wrong username!")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(404).json("wrong password!")
            }
            if (user && validPassword) {
                //Store accessToken  -   REDUX STORE -> ACCESS_TOKEN        
                const accessToken = authController.generateAccessToken(user);

                //Store refreshToken : HTTP_ONLY => REFRESH_TOKEN 
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: true,
                    path: "/",
                    // sameSite:"strict",
                });
                const { password, ...others } = user._doc;
                res.status(200).json({ ...others, accessToken });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

    requestRefreshToken: async (req, res) => {
        //take refresh token from user
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You are not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not available");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
            //create new access token,refresh token
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            });
            res.status(200).json({ accessToken: newAccessToken });
        });
    },

    userLogout: async (req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("lout out success!");
    }

};


module.exports = authController;

//store token
//1 local storage -> easy to be attack by xss
//2 HTTP-ONLY cookie -> easy to be attack by CSRF
//3 MY WAY
// redux store -> to store ACCESS_TOKEN
// HTTP-ONLY cookie -> to store REFRESH _TOKEN









