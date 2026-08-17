import express from 'express'
import { adminLogin, authAdmin } from '../controllers/auth.controller.js'
import { auth } from '../middlewares/auth.js'

const authRoutes = express.Router()
authRoutes.post("/login",adminLogin)
authRoutes.get("/authAdmin",auth,authAdmin)
export default authRoutes