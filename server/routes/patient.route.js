import express from 'express'
import { upload } from '../configs/imageUpload.js'
import { registerPatient } from '../controllers/patient.controller.js'

const patientRoute = express.Router()
patientRoute.post("/registerPatient",upload.single('image_p'),registerPatient)
export default patientRoute