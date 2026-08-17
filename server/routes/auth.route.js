import express from 'express'
import { adminLogin, authAdmin } from '../controllers/auth.controller.js'

const authRoutes = express.Router()
authRoutes.post("/login",adminLogin)
authRoutes.get("/adminAuth",authAdmin)
export default authRoutes