const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();

const app=express();

app.use(express.json());

mongoose
.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("connected to mongodb");
})
.catch((error)=>{
    console.error("error connecting to mongodb",error.message);
});

const departmentRoutes=require("./Routes/deptroutes");
const employeeRoutes=require("./Routes/employroutes");
const projectRoutes=require("./Routes/projectroutes");

app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/projects", projectRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to the Company Management API");
});


app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});