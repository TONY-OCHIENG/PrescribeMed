import databaseConnection from "../configs/db.js"
import { comparePassword, hashPassword } from "../configs/hashPassword.js"
import { generateVerificationCode } from "../configs/OTP.js"
import { resetPassword, verificationCodeEmail, welcomeEmail } from "../mail/Mail.js"
import crypto from 'crypto'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const registerPatient = (request,response) => {
    const {first_name,last_name,email_p,phone_p,age,password} = request.body
    const { filename } = request.file
    if (!first_name || !last_name || !email_p
        || !phone_p || !filename || !password || !age
    ) {
        return response.status(200).json({success: false, message: "Please fill all required fields"})
    }
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!regex.test(email_p)) {
        return response.status(200).json({success: false, message: "Enter a valid email address"})
    }

    if (password.length < 6) {
        return response.status(200).json({success: false, message: 'Password must be greater than five characters'})
    }

    const hpassword = hashPassword(password)
    const verificationToken = generateVerificationCode()
    const verificationTokenExpiresAT = new Date(Date.now() + 24 * 60 * 60 * 1000)

    try {
        const checkEmail = "SELECT email_p FROM patients WHERE email_p = ?"
        databaseConnection.query(checkEmail,[email_p],(error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({success: false, message: 'Email already exists'})
            } else {
                const insertPatient = "INSERT INTO patients(first_name,last_name,email_p,phone_p,image_p,age,password,verificationToken,verificationTokenexpiresAT) VALUES(?,?,?,?,?,?,?,?,?)"
                databaseConnection.query(insertPatient,[first_name,last_name,email_p,phone_p,filename,age,hpassword,verificationToken,verificationTokenExpiresAT],
                    (erro,results) => {
                        console.log(erro)
                        if (erro) return response.status(200).json({success: false, message: erro})
                        if (results) {
                            return response.status(201).json({success: true, message:"Account registered successfully"})
                        }                        
                    }
                )
                verificationCodeEmail(email_p,verificationToken) 
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: error})
    }

}

export const codeVerification = (request,response) => {
    const { code } = request.body
    if (!code) {
        return response.status(200).json({success: false, message:"Enter a valid code"})
    }

    try {
        const checkCode = "SELECT verificationToken, verificationTokenExpiresAT FROM patients WHERE verificationToken = ?"
        databaseConnection.query(checkCode,[code],(error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (result.length > 0 ) {
                if (result[0].verificationToken && result[0].verificationTokenExpiresAT >= Date.now()) {
                    const verifyEmail = "UPDATE patients SET isVerified = true WHERE verificationToken = ?"
                    databaseConnection.query(verifyEmail,[code],(err,results) => {
                        if (err) return response.status(500).json({success: false, message: err})
                        if (result) {
                            const fullNames = "SELECT CONCAT(first_name,' ',last_name) AS fullname, email_p FROM patients WHERE verificationToken = ?"
                            databaseConnection.query(fullNames,[code], (errors, names) => {
                                if (errors) return response.status(500).json({success: false, message: errors})
                                if (names.length > 0) {
                                    const fullname = names[0].fullname
                                    const email = names[0].email_p
                                    welcomeEmail(email,fullname)
                                }
                            })
                        } 
                        return response.status(200).json({success: true, message: "Email verified successfully"})                  
                    })
                } else {
                    return response.status(200).json({success: false, message: "Invalid or expired Token"})
                }
            } else {
                return response.status(200).json({success: false, message: "Invalid Token"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const resetPasswordLink = (request,response) => {
    const { email } = request.body
    if (!email) {
        return response.status(200).json({success: false, message: "Fill the required field"})
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!regex.test(email)) {
        return response.status(200).json({success: false, message: "Enter a valid email address"})
    }

    try {
        const checkEmail = "SELECT email_p FROM patients WHERE email_p = ?"
        databaseConnection.query(checkEmail,[email], (error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (result.length > 0) {
                //assigning tokens and expiry date 
                const resetPasswordToken = crypto.randomBytes(20).toString('hex')
                const resetPasswordTokenExpiresAT = new Date( Date.now() + 1 * 60 * 60 * 1000)

                const updateResetTokens = "UPDATE patients SET resetPasswordToken = ? , resetPasswordTokenExpiresAT = ? WHERE email_p = ?"
                databaseConnection.query(updateResetTokens,[resetPasswordToken,resetPasswordTokenExpiresAT,email], (errors,results) => {
                    if (errors) return response.status(500).json({success: false, message: "Internal server error"})
                    if (results) {
                        resetPassword(email,`${process.env.CLIENT_URL }/reset-password/${resetPasswordToken}`)
                        return response.status(200).json({success: true, message: "Reset password link has been sent to your email"})
                    }
                })
            } else {
                return response.status(200).json({success: false, message: "Email doesn't exist"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const changePassword = (request,response) => {
    const { password, password_p} = request.body
    const { id } = request.params
    
    if (!password || !password_p) {
        return response.status(200).json({success: false, message: "Please fill the required fields"})
    }

    if (password != password_p) {
       return response.status(200).json({success: false, message: "Password didn't match"})
    }

    if (password.length < 6) {
        return response.status(200).json({success: false, message: "Password must be greater than five characters"})
    }

    const hpassword = hashPassword(password)

    try {
        const checkTokens = "SELECT resetPasswordToken, resetPasswordTokenExpiresAT FROM patients WHERE resetPasswordToken = ?"
        databaseConnection.query(checkTokens, [id], (error, result) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (result.length > 0) {
                if (result[0].resetPasswordToken && result[0].resetPasswordTokenExpiresAT >=  new Date().getHours()) {
                    const updatePassword = "UPDATE patients SET password = ? WHERE resetPasswordToken = ?"
                    databaseConnection.query(updatePassword, [hpassword,id],(error,results) => {
                        if (error) return response.status(500).json({success: false, message: error})
                        return response.status(200).json({success: true, message: "Password updated successfully"})
                    })
                } else {
                    return response.status(200).json({success: false, message: "Token expired or invalid"})
                }
            } else {
                return response.status(200).json({success: false, message: "Invalid token"})
            }
        })
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const loginPatient = (request,response) => {
    const { email_p, password } = request.body

    if (!email_p || !password) {
        return response.status(200).json({success: false, message: "Fill all fields"})
    } 

    try {
        const checkUser = "SELECT * FROM patients WHERE email_p = ?"
        databaseConnection.query(checkUser, [email_p], (error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (results.length > 0) {
                const patientPassword = comparePassword(password,results[0].password)
                if (patientPassword) {
                    const patientID = results[0].patient_id
                    const lastName = results[0].last_name
                    const token = jwt.sign({patientID,lastName},process.env.SECRET_USER,{expiresIn:"1d"})
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

export const authenticatePatient = (request,response) => {
    return response.status(200).json({success: true, details: {
        lastName: request.lastName,
        patientID: request.patientID
    }})
}

export const logoutPatient = (request,response) => {
    response.clearCookie("token")
    return response.status(200).json({success: true, message: "logout successfully"})
}

export const patientProfile = (request,response) => {
    const { id } = request.params
    try {
        const patientProfile = "SELECT first_name,last_name,email_p,phone_p,image_p,age FROM patients WHERE patient_id = ?"
        databaseConnection.query(patientProfile,[id],(error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (results.length > 0) {
                return response.status(200).json({success: false, results: results})
            } else {
                return response.status(404).json({success: false , message: "User not found"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}