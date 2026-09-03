import express from 'express'
import { upload } from '../configs/imageUpload.js'
import { authenticatePatient, changePassword, codeVerification, editPatientProfile, loginPatient, logoutPatient, patientProfile, registerPatient, resetPasswordLink } from '../controllers/patient.controller.js'
import { authPatient } from '../middlewares/auth.js'

const patientRoute = express.Router()
patientRoute.post("/registerPatient",upload.single('image_p'),registerPatient)
patientRoute.post("/verifyEmail",codeVerification)
patientRoute.post("/reset-link",resetPasswordLink)
patientRoute.post("/updatePassword/:id",changePassword)
patientRoute.post("/loginPatient",loginPatient)
patientRoute.get("/authPatient",authPatient, authenticatePatient)
patientRoute.get("/logoutPatient",logoutPatient)
patientRoute.get("/patientProfile/:id",patientProfile)
patientRoute.post("/updateProfile/:id",upload.single('image_p'), editPatientProfile)
export default patientRoute