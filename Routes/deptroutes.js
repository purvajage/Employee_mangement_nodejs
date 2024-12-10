const express=require("express");
const router=express.router();
const deptcontroller=require("../Controller/deptcontroller");
const departmentController = require("../Controller/deptcontroller");

//department routes
router.get("/",departmentController/deptcontroller.getAllDepartments);
router.get("/:id",depart.departmentController.getDepartmentById);
router.post("/",departmentController,deptcontroller.createDepartment);
router.put("/:id",departmentController.updateDepartment);
router.delete("/:id",departmentController.deleteDepartment);
module.exports=router;