const mongoose = require("mongoose");


const departmentSchema = new mongoose.Schema(
  {
    deptName: {
      type: String,
      required: [true, "Department name is required"],
    },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Department", departmentSchema);
