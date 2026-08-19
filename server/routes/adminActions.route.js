import express from 'express'
import { addDoctors } from '../controllers/adminActions.controller.js'

const adminActions = express.Router()
adminActions.post("/addDoctor", addDoctors)
export default adminActions