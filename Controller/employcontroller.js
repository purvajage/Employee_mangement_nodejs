const Employee=require("../Models/employmodel");
const employeecontroller={
    getAllEmployees:async(req,res)=>{
        try{
            const employees=await Employee.find();
            res.status(200).json(employees);
        }
        catch(error){
            res.status(500).json({message:"error fetching employees",error});
        }
    },
    getEmployeeId:async(req,res)=>{
        try{
            const{id}=req.params;
            const employee=await Employee.findById(id);
            if(!employee){
                return res.status(404).json({message:"employee not found"});
            }
            res.status(200).json(employee);
        } catch(error){
            res.status(500).json({message:"error fetching employee",error});
        }
    },
    createemployee:async(req,res)=>{
        try{
            const newEmployee=new Employee(req.body);
            const savedEmployee= await newEmployee.save();
            res.status(201).json(savedEmployee);
        }
        catch(error){
            res.status(400).json({message:"error creating employee",error});
        }

    },
    updateEmployee:async(req,res)=>{
        try{
            const {id}=req.params;
            const updateEmployee=await Employee.findByIdAndUpdate(id,req.body);
            if(!updateEmployee){
                return res.status(404).json({message:"emplotee not found"});
            }
            res.stats(200).json(updateEmployee);
        }
        catch(error){
            res.status(400).json({message:"error updating employee",error});
        }
    },
    
    deleteemployee:async(req,res)=>{
        try{
            const{id}=req.params;
            const deleteemployee=await Employee.findByIdAndDelete(id);
            if(!deleteemployee){
                return res.status(404).json({message:"employee not found"});
            }
            res.status(200).json({message:"employee deleted sucessfully"});
                }
                catch(error){
                    res.status(500).json({message:"error deleting employee",error});
                }
    },
    
};
module.exports=employeecontroller;