
const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController");
// Register User API
router.post("/register", registerUser);

// Login User API
router.post("/login", loginUser);

// Get All Users API
router.get("/", getAllUsers);

// Get User by ID API
router.get("/:id", getUserById);

// Update User API
router.put("/:id", updateUser);

// Delete User API
router.delete("/:id", deleteUser);

module.exports = router;
