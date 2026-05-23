const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({
            message: "no token provides"
        })

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports=authMiddleware