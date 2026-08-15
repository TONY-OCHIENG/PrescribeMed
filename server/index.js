import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import databaseConnection from './configs/db.js'
databaseConnection 
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})