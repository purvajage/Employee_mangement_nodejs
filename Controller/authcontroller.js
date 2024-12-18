const usermodel = require("../Models/usermodel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// Register
const registercontroller = async (req, res) => {
    try {
        const { userName, email, password, phone, address, answer } = req.body;

   
        if (!userName || !email || !password || !phone || !address || !answer) {
            return res.status(400).send({
                success: false,
                message: "Please provide all fields.",
            });
        }

      
        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email already registered. Please login.",
            });
        }

    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await usermodel.create({
            userName, 
            email,
            password: hashedPassword, 
            phone,
            address,
            answer,
        });

        res.status(201).send({
            success: true,
            message: "Successfully registered",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in register API",
            error,
        });
    }
};

// Login
const logincontroller = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please provide email and password.",
            });
        }

       
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found. Please register.",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({
                success: false,
                message: "Invalid credentials.",
            });
        }

        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

     
        user.password = undefined;

        res.status(200).send({
            success: true,
            message: "Login successful",
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login API",
            error,
        });
    }
};

module.exports = { registercontroller, logincontroller };