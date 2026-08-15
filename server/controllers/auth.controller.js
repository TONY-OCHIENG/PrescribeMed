import jwt from 'jsonwebtoken'
import databaseConnection from '../configs/db.js'
import { comparePassword } from '../configs/hashPassword.js'
import jwt from 'jsonwebtoken'

export const adminLogin = (request,response) => {
    const { email, password} = request.body
    if (!email || !password) {
        return response.status(200).json({success: false, message:"Fill all fields"})
    }

    try {
        const checkEmail = "SELECT * FROM admin WHERE admin_email = ?"
        databaseConnection.query(checkEmail,[email],(error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (result.length > 0) {
                const hpassword = comparePassword(password,result[0].admin_password)
                if (hpassword) {
                    const adminID = result[0].admin_id
                    const token = jwt.sign({adminID},process.env.SECRET,{expiresIn:"1d"})
                    response.cookie("token",token,({
                        httpOnly: true,
                        secure:process.env.NODE_ENV === "production",
                        sameSite: "strict",
                        maxAge: 1 * 24 * 60 * 60 * 1000
                    }))
                }
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}