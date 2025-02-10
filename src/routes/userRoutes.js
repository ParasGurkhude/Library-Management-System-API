const express = require("express");
const {getAllUsers,  updateUser,  deleteUser, getUsersById } = require("../controllers/userController")
const authenticateUser = require("../middlewares/authMiddleware")
const authorizedRole = require("../middlewares/roleMiddleware");


const router = express.Router()

router.get("/", authenticateUser,authorizedRole("Admin"), getAllUsers)
router.get("/:id", authenticateUser, getUsersById)
router.put("/:id", authenticateUser, updateUser)
router.delete("/:id", authenticateUser,authorizedRole("Admin"), deleteUser)

module.exports = router