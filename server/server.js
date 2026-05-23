require("dotenv").config();
const express=require('express');
const connectDb = require("./src/config/database");
const authRouter=require("./src/routes/user.route")
const resumeRouter=require("./src/routes/resume.route")
const app=express();
const PORT=process.env.PORT;
connectDb();
app.use(express.json());
app.use("/api/auth",authRouter)
app.use("/api",resumeRouter)
app.listen(PORT,()=>{
    console.log("server is running on port ",{PORT})
})
