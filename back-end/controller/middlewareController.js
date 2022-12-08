const jwt = require("jsonwebtoken");
const middlewareController = {
    //verifyToken || to verify that the token is belong to this user or not
    verifyToken: (req, res, next) => {
        const token = req.headers.token; //take token form user
        console.log("token",token );
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not Valid")
                }
                req.user = user;
                next();
            });
        }
        else {
            return res.status(401).json('You are not authenticated yet')
        }
    },
    verifyTokenAndAdminAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if (req.user.id == req.params.id || req.user.admin) {
                console.log("req.user.id : ",req.user.id)
                next();
            } else {
                return res.status(403).json("You are not allowed to delete Others");
            }
        });
    }

}

module.exports = middlewareController;


















