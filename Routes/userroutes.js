const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controller/usercontroller");
const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();


router.get("/getUser", authMiddleware, getUserController);

router.put("/updateUser", authMiddleware, updateUserController);


router.post("/updatePassword", authMiddleware, updatePasswordController);


router.post("/resetPassword", authMiddleware, resetPasswordController);


router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

module.exports = router;