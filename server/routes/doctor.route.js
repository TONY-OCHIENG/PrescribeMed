import express from 'express'
import { authDoctorLogin, loginDoctor, logoutDoctor } from '../controllers/doctor.controller.js'
import { authDoctor } from '../middlewares/auth.js'

const doctorRoutes = express.Router()
doctorRoutes.post("/loginDoctor",loginDoctor)
doctorRoutes.get("/authDoctor",authDoctor,authDoctorLogin)
doctorRoutes.get("/logoutDoctor",logoutDoctor)
export default doctorRoutes