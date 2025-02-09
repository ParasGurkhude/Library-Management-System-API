const express = require("express")
const { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } = require("../controllers/authorController")
const authorizedRole = require("../middlewares/roleMiddleware")

const router = express.Router()

router.post("/", authenticateUser,authorizedRole("Admin"), createAuthor)
router.get("/", authenticateUser, getAllAuthors)
router.get("/:id", authenticateUser, getAuthorById)
router.put("/:id", authenticateUser,authorizedRole("Admin"), updateAuthor)
router.delete("/:id", authenticateUser,authorizedRole("Admin"), deleteAuthor)

module.exports = router