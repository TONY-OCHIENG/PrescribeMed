import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const auth = (request,response,next) => {
    const token = request.cookies.token
    if (!token) {
        return response.status(200).json({success: false, message:"Unauthorised access"})
    } else {
        jwt.verify(token,process.env.SECRET,(err,decoded) => {
            if (err) {
                return response.status(200).json({success:false, message:"Access denied"})
            } else {
                request.adminID = decoded.adminID
                next()
            }
        })
    }
}

export const authPatient = (request,response,next) => {
    const token = request.cookies.token
    if (!token) {
        return response.status(200).json({success: false, message: "Access denied"})
    } else {
        jwt.verify(token,process.env.SECRET_USER,(err,decoded) => {
            if (err) {
                return response.status(200).json({success: false, message: "Access denied"})
            } else {
                request.lastName = decoded.lastName
                request.patientID = decoded.patientID
                next()
            }
        })
    }
}