import express from 'express'
import { upload } from '../configs/imageUpload'
import { registerPatient } from '../controllers/patient.controller'

const patientRoute = express.Router()
patientRoute.post("/registerPatient",upload.single('image_p'),registerPatient)
export default patientRoute