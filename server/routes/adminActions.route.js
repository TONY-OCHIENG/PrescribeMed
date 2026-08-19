import express from 'express'
import { addDoctors } from '../controllers/adminActions.controller.js'
import { upload } from '../configs/imageUpload.js'

const adminActions = express.Router()
adminActions.post("/addDoctor",upload.single('image'), addDoctors)
export default adminActions