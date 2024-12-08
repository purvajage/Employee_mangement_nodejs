const mongoose = require("mongoose");

// Schema
const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: [true, "Project name is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
    },
    budget: {
      type: Number,
      required: [true, "Budget is required"],
    },
    deptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: [true, "Department ID is required"],
    },
  },
  { timestamps: true }
);

// Export
module.exports = mongoose.model("Project", projectSchema);
