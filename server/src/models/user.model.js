const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        unique:true,
        type:String,
        required:true
    },
    password:{
        required:true,
        type:String,
        minlength:8
    }
},{timestamps:true})


const userModel=mongoose.model("User",userSchema)
module.exports=userModel;