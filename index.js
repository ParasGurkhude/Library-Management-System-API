const express = require("express")
const { connectDB } = require("./src/config/db")
const authRoutes = require("./src/routes/authRoutes")
const userRoutes = require("./src/routes/userRoutes")
const authorRoutes = require("./src/routes/authorRoutes")
const bookRoutes = require("./src/routes/bookRoutes")

require("dotenv").config
const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/authors", authorRoutes)
app.use("/api/books", bookRoutes)

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("Server is running at http://localhost:8080")
})