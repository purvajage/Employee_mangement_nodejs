const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
//initialize express app
const app=express();
//middleware to parse json
app.use(express.json());

//database connection
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
const projectRoutes=require("./Controller/projectcontroller");

// Use routes
app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/projects", projectRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Company Management API");
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});