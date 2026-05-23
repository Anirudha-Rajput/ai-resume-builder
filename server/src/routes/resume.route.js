const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authentication.middleware");

const {
    createResume,
    getAllResumes,
    getResumeById,
    updateResume,
    deleteResume,
} = require("../controllers/resume.controller");


router.post("/resume/create", authMiddleware, createResume);

router.get("/resume/all", authMiddleware, getAllResumes);

router.get("/resume/:id", authMiddleware, getResumeById);

router.put("/resume/update/:id", authMiddleware, updateResume);

router.delete("/resume/delete/:id", authMiddleware, deleteResume);

module.exports = router;