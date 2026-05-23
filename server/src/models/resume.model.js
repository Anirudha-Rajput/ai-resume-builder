const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "Untitled Resume",
    },

    template: {
      type: String,
      default: "modern",
    },

    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
      portfolio: String,
      summary: String,
    },

    education: [
      {
        college: String,
        degree: String,
        field: String,
        startDate: String,
        endDate: String,
        cgpa: String,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        description: [String],
      },
    ],

    projects: [
      {
        title: String,
        techStack: [String],
        description: [String],
        githubLink: String,
        liveLink: String,
      },
    ],

    skills: [String],

    certifications: [
      {
        name: String,
        issuer: String,
        date: String,
      },
    ],

    achievements: [String],

    atsScore: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);