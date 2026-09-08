import express from 'express'
import { appointmentHistory, appointmentHistroryDoctor, approveAppointment, bookAppointment, cancelAppointment } from '../controllers/appointment.controller.js'

const appointmentRoute = express.Router()
appointmentRoute.post("/bookAppointment",bookAppointment)
appointmentRoute.get("/appointmentHistory",appointmentHistory)
appointmentRoute.get("/appointmentDoctor/:id",appointmentHistroryDoctor)
appointmentRoute.put("/approveAppointment/:id",approveAppointment)
appointmentRoute.put("/cancelAppointment/:id",cancelAppointment)
export default appointmentRoute