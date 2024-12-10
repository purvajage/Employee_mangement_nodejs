const express=require("express");
const router=express.Router();
const projectController=require("../Controller/projectcontroller");
// Project Routes
router.get("/", projectController.getAllProjects); // Get all projects
router.post("/", projectController.createProject); // Create a new project
router.put("/:id", projectController.updateProject); // Update an existing project by ID
router.delete("/:id", projectController.deleteProject); // Delete a project by ID

module.exports = router;