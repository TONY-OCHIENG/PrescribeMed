import express from 'express'
import { bookAppointment } from '../controllers/appointment.controller.js'

const appointmentRoute = express.Router()
appointmentRoute.post("/bookAppointment",bookAppointment)
export default appointmentRoute