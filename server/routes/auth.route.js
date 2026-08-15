import express from 'express'
import { adminLogin } from '../controllers/auth.controller.js'

const authRoutes = express.Router()
authRoutes.post("/login",adminLogin)
export default authRoutes