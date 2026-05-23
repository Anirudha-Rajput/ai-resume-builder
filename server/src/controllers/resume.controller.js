const Resume = require("../models/resume.model");

// creata empty resume
const createResume = async (req, res) => {
    try {

        const resume = await Resume.create({
            userId: req.user.id,
            title: "Untitled Resume",
        });
        res.status(201).json({
            success: true,
            message: "Resume created",
            resume,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// get user all resume

const getAllResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.user.id });

        res.status(200).json({
            success: true,
            resumes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// get single resume of user

const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user.id,
        })
        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }
        res.status(200).json({
            success: true,
            resume
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// update resume 
const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate({
            _id: req.params.id,
            userId: req.user.id
        }, req.body, { new: true })
        if (!resume) return res.status(404).json({
            success: false,
            message: "Resume not found."
        })
        res.status(200).json({
            success: true,
            message: "Resume updated",
            resume,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id,
        });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Resume deleted",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createResume, getAllResumes, getResumeById, updateResume, deleteResume }