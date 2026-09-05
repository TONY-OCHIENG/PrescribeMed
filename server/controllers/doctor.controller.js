import databaseConnection from "../configs/db.js"
import dotenv from 'dotenv'
import { comparePassword } from "../configs/hashPassword.js"
import jwt from 'jsonwebtoken'
dotenv.config()

export const loginDoctor = (request,response) => {
    const { email, password} = request.body

    if (!email || !password) {
        return response.status(200).json({success: false, message: "Fill all fields"})
    }

    try {
        const checkDoctor = "SELECT doctors_id,firstName,lastName,password FROM doctors WHERE email = ?"
        databaseConnection.query(checkDoctor,[email],(error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
               if (result.length > 0) {
                    const doctorPassword = comparePassword(password,result[0].password)
                    if (doctorPassword) {
                        const doctorID = result[0].doctors_id
                        const lastName = result[0].lastName
                        const token = jwt.sign({doctorID,lastName},process.env.SECRET_USER,{expiresIn:"1d"})
                        response.cookie("token",token,({
                            httpOnly: true,
                            secure:process.env.NODE_ENV === "production",
                            sameSite: "strict",
                            maxAge: 1 * 24 * 60 * 60 * 1000
                        }))
                        return response.status(200).json({success: true, message: "login successfully"})
                    } else {
                        return response.status(200).json({success: false, message: "Invalid credentials"})
                    }
                } else {
                    return response.status(200).json({success: false , message: "user not found"})
                }
        })        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
} 

export const authDoctorLogin = (request,response) => {
       return response.status(200).json({success: true, details: {
        lastName: request.lastName,
        doctorID: request.doctorID
    }})
}