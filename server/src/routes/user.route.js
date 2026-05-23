const express = require("express");
const { signupController, loginController, profileController } = require("../controllers/authentication.controller");
const authMiddleware = require("../middlewares/authentication.middleware");



const router = express.Router();
router.post("/signup", signupController)
router.post("/login",loginController)
router.get("/profile",authMiddleware,profileController)


module.exports=router;