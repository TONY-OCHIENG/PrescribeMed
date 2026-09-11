import express from 'express'
import { appointmentHistory, appointmentHistroryDoctor, appointmentsMade, approveAppointment, approvedAppointments, bookAppointment,cancelAppointment, canceledAppointments, totalAppointment, totalEarnings, totalPatients, recentAppointments } from '../controllers/appointment.controller.js'

const appointmentRoute = express.Router()
appointmentRoute.post("/bookAppointment",bookAppointment)
appointmentRoute.get("/appointmentHistory",appointmentHistory)
appointmentRoute.get("/appointmentDoctor/:id",appointmentHistroryDoctor)
appointmentRoute.get("/appointments/:id",appointmentsMade)
appointmentRoute.put("/approveAppointment/:id",approveAppointment)
appointmentRoute.put("/cancelAppointment/:id",cancelAppointment)
appointmentRoute.get("/totalEarnings/:id",totalEarnings)
appointmentRoute.get("/totalAppointments/:id",totalAppointment)
appointmentRoute.get("/totalPatients/:id",totalPatients)
appointmentRoute.get("/approvedAppointments/:id",approvedAppointments)
appointmentRoute.get("/caneledAppointments/:id",canceledAppointments)
appointmentRoute.get("/recentAppointment",recentAppointments)
export default appointmentRoute