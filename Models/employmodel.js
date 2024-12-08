const mongoose = require("mongoose");

// Schema
const employeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    hireDate: {
      type: Date,
      required: [true, "Hire date is required"],
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    deptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: [true, "Department ID is required"],
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  { timestamps: true }
);

// Export
module.exports = mongoose.model("Employee", employeeSchema);
