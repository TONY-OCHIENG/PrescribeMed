import express from 'express'
import { authDoctorLogin, doctorsProfile, loginDoctor, logoutDoctor, updateDoctorsDetails } from '../controllers/doctor.controller.js'
import { authDoctor } from '../middlewares/auth.js'
import { upload } from '../configs/imageUpload.js'

const doctorRoutes = express.Router()
doctorRoutes.post("/loginDoctor",loginDoctor)
doctorRoutes.get("/authDoctor",authDoctor,authDoctorLogin)
doctorRoutes.get("/logoutDoctor",logoutDoctor)
doctorRoutes.get("/doctorProfile/:id",doctorsProfile)
doctorRoutes.post("/updateDoctor/:id",upload.single('image'),updateDoctorsDetails)
export default doctorRoutes