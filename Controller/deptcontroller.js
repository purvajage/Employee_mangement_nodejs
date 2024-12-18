const department=require("../Models/deptmodel");


const deptcontroller = {

  getAllDepartments: async (req, res) => {
    try {
      const departments = await Department.find().populate("managerId");
      res.status(200).json(departments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching departments", error });
    }
  },


  getDepartmentById: async (req, res) => {
    try {
      const { id } = req.params;
      const department = await Department.findById(id).populate("managerId");
      if (!department) {
        return res.status(404).json({ message: "Department not found" });
      }
      res.status(200).json(department);
    } catch (error) {
      res.status(500).json({ message: "Error fetching department", error });
    }
  },


  createDepartment: async (req, res) => {
    try {
      const newDepartment = new Department(req.body);
      const savedDepartment = await newDepartment.save();
      res.status(201).json(savedDepartment);
    } catch (error) {
      res.status(400).json({ message: "Error creating department", error });
    }
  },

  updateDepartment: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updatedDepartment) {
        return res.status(404).json({ message: "Department not found" });
      }
      res.status(200).json(updatedDepartment);
    } catch (error) {
      res.status(400).json({ message: "Error updating department", error });
    }
  },

  deleteDepartment: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDepartment = await Department.findByIdAndDelete(id);
      if (!deletedDepartment) {
        return res.status(404).json({ message: "Department not found" });
      }
      res.status(200).json({ message: "Department deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting department", error });
    }
  },
};

module.exports = deptcontroller;
