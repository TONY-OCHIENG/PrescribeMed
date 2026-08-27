import express from 'express'
import { upload } from '../configs/imageUpload.js'
import { changePassword, codeVerification, registerPatient, resetPasswordLink } from '../controllers/patient.controller.js'

const patientRoute = express.Router()
patientRoute.post("/registerPatient",upload.single('image_p'),registerPatient)
patientRoute.post("/verifyEmail",codeVerification)
patientRoute.post("/reset-link",resetPasswordLink)
patientRoute.post("/updatePassword/:id",changePassword)
export default patientRoute