import express from 'express'
import { addDoctors, getDoctors } from '../controllers/adminActions.controller.js'
import { upload } from '../configs/imageUpload.js'

const adminActions = express.Router()
adminActions.post("/addDoctor",upload.single('image'), addDoctors)
adminActions.get("/getAllDoctors",getDoctors)
export default adminActions