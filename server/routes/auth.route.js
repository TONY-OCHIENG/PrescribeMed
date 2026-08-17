import express from 'express'
import { adminLogin, authAdmin, logoutAdmin } from '../controllers/auth.controller.js'
import { auth } from '../middlewares/auth.js'

const authRoutes = express.Router()
authRoutes.post("/login",adminLogin)
authRoutes.get("/authAdmin",auth,authAdmin)
authRoutes.get("/logoutAdmin",logoutAdmin)
export default authRoutes