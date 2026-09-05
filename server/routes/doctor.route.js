import express from 'express'
import { loginDoctor } from '../controllers/doctor.controller'

const doctorRoutes = express.Router()
doctorRoutes.post("/loginDoctor",loginDoctor)
export default doctorRoutes