import databaseConnection from "../configs/db.js"
import { hashPassword } from "../configs/hashPassword.js"
import { generateVerificationCode } from "../configs/OTP.js"

export const registerPatient = (request,response) => {
    const {first_name,last_name,email_p,phone_p,age,password} = request.body
    const { filename } = request.file
    console.log(first_name,last_name,email_p,phone_p,age,password,filename)
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
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: error})
    }

}