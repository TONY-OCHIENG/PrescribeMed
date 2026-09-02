import express from 'express'
import { appointmentHistory, bookAppointment } from '../controllers/appointment.controller.js'

const appointmentRoute = express.Router()
appointmentRoute.post("/bookAppointment",bookAppointment)
appointmentRoute.get("/appointmentHistory",appointmentHistory)
export default appointmentRoute