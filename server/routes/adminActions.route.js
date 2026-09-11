import express from 'express'
import { addDoctors, deleteDoctor, getDoctors, getSingleDoctor, numberofAppointments, numberofDoctors, numberofPatients } from '../controllers/adminActions.controller.js'
import { upload } from '../configs/imageUpload.js'

const adminActions = express.Router()
adminActions.post("/addDoctor",upload.single('image'), addDoctors)
adminActions.get("/getAllDoctors",getDoctors)
adminActions.get("/getSingleDoctor/:id",getSingleDoctor)
adminActions.delete("/deleteSingleDoctor/:id",deleteDoctor)
adminActions.get("/totalDoctors",numberofDoctors)
adminActions.get("/totalPatients",numberofPatients)
adminActions.get("/totalAppointments",numberofAppointments)
export default adminActions