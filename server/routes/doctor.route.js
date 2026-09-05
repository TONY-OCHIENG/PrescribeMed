import express from 'express'
import { authDoctorLogin, loginDoctor } from '../controllers/doctor.controller.js'
import { authDoctor } from '../middlewares/auth.js'

const doctorRoutes = express.Router()
doctorRoutes.post("/loginDoctor",loginDoctor)
doctorRoutes.get("/authDoctor",authDoctor,authDoctorLogin)
export default doctorRoutes