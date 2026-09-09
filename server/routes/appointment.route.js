import express from 'express'
import { appointmentHistory, appointmentHistroryDoctor, appointmentsMade, approveAppointment, bookAppointment,cancelAppointment, totalEarnings } from '../controllers/appointment.controller.js'

const appointmentRoute = express.Router()
appointmentRoute.post("/bookAppointment",bookAppointment)
appointmentRoute.get("/appointmentHistory",appointmentHistory)
appointmentRoute.get("/appointmentDoctor/:id",appointmentHistroryDoctor)
appointmentRoute.get("/appointments/:id",appointmentsMade)
appointmentRoute.put("/approveAppointment/:id",approveAppointment)
appointmentRoute.put("/cancelAppointment/:id",cancelAppointment)
appointmentRoute.get("/totalEarnings/:id",totalEarnings)
export default appointmentRoute