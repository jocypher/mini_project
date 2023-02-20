const express = require("express")

const connectDb = require("./config/dbConn")
const mongoose = require("mongoose")


require("dotenv").config()

const app = express()
const PORT = process.env.PORT
connectDb()


app.use(express.json())

app.use('/student', require('./routes/api/student'))


mongoose.connection.once("open", () =>{
    console.log("connected to mongoDb")

    app.listen(PORT, () =>{
        console.log(`Server running on ${PORT}`)
})
})
