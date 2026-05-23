const mongoose=require("mongoose")

const connectDb=async()=>{
try {
    let res= await mongoose.connect(process.env.MONGO_URI)
    if(res) console.log("Connected to Database Successfully");
} catch (error) {
    console.log("Error In Connecting Database -> ",error)
}
}
module.exports=connectDb;