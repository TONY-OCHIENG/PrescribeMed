import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import adminActions from './routes/adminActions.route.js'
import patientRoute from './routes/patient.route.js'
import appointmentRoute from './routes/appointment.route.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static('server/public'))
app.use(cors({
    origin:'http://localhost:5173',
    methods:['PUT','GET','POST','DELETE'],
    credentials:true,
})) 
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/actions",adminActions)
app.use("/api/patients",patientRoute)
app.use("/api/appointment",appointmentRoute)
app.listen(process.env.PORT, () => {
    console.log("Server is running")
})