import express from 'express'
import { addDoctors } from '../controllers/adminActions.controller'

const adminActions = express.Router()
adminActions.post("/addDoctor", addDoctors)
export default adminActions