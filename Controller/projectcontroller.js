const Project=require("../Models/projectmodel");
const projectcontroller={
    getAllProjects:async(req,res)=>{
        try{
            const projects=await Project.find();
            res.status(200).json(projects);
        }catch(error){
            res.status(500).json({message:"error fetching projects",error});
        }
    },
createproject:async(req,res)=>{
    try{
        const newproject=new Project(req.body);
        const savedproject=await newproject.save();
        res.status(201).json(savedproject);
    }catch(error){
        res.status(400).json({message:"error creating project",error});
    }
},
updateproject:async(req,res)=>{
    try{
        const {id}=req.params;
        const updateproject=await Project.findByIdAndUpdate(id,req.body);
        if(!updateproject){
            return res.status(404).json({message:"project not found"});
        }
        res.status(200).json(updateproject);
    }catch(error){
        res.status(400).json({message:"error updating project",error});
    }
},
deleteproject:async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteproject=await Project.findByIdAndDelete(id);
        if(!deleteproject){
            return res.status(404).json({message:"project not found"});
        }
        res.status(200).json({message:"project deleted sucessfully"});
    }
    catch(error){
        return res.status(500).json({message:"error deleting project",error});
    }
},
};
module.export=projectcontroller;