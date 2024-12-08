const usermodel=require("../Models/usermodel");
module.exports=async(req,res,next)=>{
    try{
        const user=await usermodel.findById(req.body.id);
        if(user.usertype!="admin"){
            return res.status(401).send({
                sucess:false,
                message:"only admin access",
            });
        }else{
            next();
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            sucess:false,
            message:"un authoraised access",
            error,
        });
    }
};