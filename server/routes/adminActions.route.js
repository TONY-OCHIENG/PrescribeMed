import express from 'express'
import { addDoctors, getDoctors, getSingleDoctor } from '../controllers/adminActions.controller.js'
import { upload } from '../configs/imageUpload.js'

const adminActions = express.Router()
adminActions.post("/addDoctor",upload.single('image'), addDoctors)
adminActions.get("/getAllDoctors",getDoctors)
adminActions.get("/getSingleDoctor/:id",getSingleDoctor)
export default adminActions