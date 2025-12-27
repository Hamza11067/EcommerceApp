import express from "express"
import path from "path"

const app = express()
const __dirname = path.resolve()

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "Success"})
})

// make our app ready for deployment

app.listen(3000, () => {
    console.log("Server is up and running123")
})
