const express=require("express");
const router=express.router();
const employeecontroller=require("../Controller/employcontroller");


router.get("/",employeecontroller.getAllEmployees);
router.get("/:id",employeecontroller.getEmployeeId);
router.post("/",employeecontroller.createemployee);
router.put("/:id",employeecontroller.updateEmployee);
router.delete("/:id",employeecontroller.deleteemployee);
module.exports=router;