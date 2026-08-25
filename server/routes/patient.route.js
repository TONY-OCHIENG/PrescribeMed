import express from 'express'
import { upload } from '../configs/imageUpload.js'
import { codeVerification, registerPatient } from '../controllers/patient.controller.js'

const patientRoute = express.Router()
patientRoute.post("/registerPatient",upload.single('image_p'),registerPatient)
patientRoute.post("/verifyEmail",codeVerification)
export default patientRoute