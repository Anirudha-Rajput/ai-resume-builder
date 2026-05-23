const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const userModel = require("../models/user.model");


const signupController=async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let existingUser = await userModel.findOne({ email })
        if (existingUser) return res.status(404).json({
            message: "User already exist Please login ",

        })
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        // create user
        const user = await userModel.create({ name, email, password: hashedPassword })
        //generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        res.status(201).json({
            message: "User Registered Successfully",
            token,
            user
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const loginController= async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) return res.status(400).json({
            message: "User not exist Please Signup ",

        })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({
            message: "invalid credentials"
        })
        // generate token
        const token = jwt.sign(
            { id: user._id }
            ,process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.status(200).json({
            message: "User Login Successfully",
            token,
            user
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const profileController=async(req,res)=>{
    try {
        const user=await userModel.findById(req.user.id).select("-password")
        if(!user) return res.status(400).json({
            message:"user not found"
        })
        res.status(200).json({
            message:"User Fetched Successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            message:error.message   
        })
    }
}
module.exports={signupController,loginController,profileController}