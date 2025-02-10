const express = require("express")
const { createBook, getAllBook, getBookById, updateBook, deleteBook } = require("../controllers/bookController")
const authorizedRole = require("../middlewares/roleMiddleware")
const authenticateUser = require("../middlewares/authMiddleware");

const router = express.Router()

router.post("/", authenticateUser,authorizedRole("Admin"), createBook)
router.get("/", authenticateUser, getAllBook)
router.get("/:id", authenticateUser, getBookById)
router.put("/:id", authenticateUser,authorizedRole("Admin"), updateBook)
router.delete("/:id", authenticateUser,authorizedRole("Admin"), deleteBook)

module.exports = router