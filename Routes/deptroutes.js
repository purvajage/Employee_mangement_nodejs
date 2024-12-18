const express=require("express");
const router=express.router();
const deptcontroller=require("../Controller/deptcontroller");


//department routes
router.get("/",deptcontroller.getAllDepartments);
router.get("/:id",deptcontroller.getDepartmentById);
router.post("/",deptcontroller.createDepartment);
router.put("/:id",deptcontroller.updateDepartment);
router.delete("/:id",deptcontroller.deleteDepartment);
module.exports=router;