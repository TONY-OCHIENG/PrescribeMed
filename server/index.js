import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import adminActions from './routes/adminActions.route.js'
import patientRoute from './routes/patient.route.js'
import appointmentRoute from './routes/appointment.route.js'
import doctorRoutes from './routes/doctor.route.js'
import path from 'path'
dotenv.config()

const app = express()
const __dirname = path.resolve();
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
app.use("/api/doctors",doctorRoutes)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/dist")));
	app.all("/*splat", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}
app.listen(process.env.PORT, () => {
    console.log("Server is running")
})