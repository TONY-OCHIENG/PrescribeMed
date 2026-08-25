import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { VERIFICATION_CODE } from './EmailTamplates.js'
dotenv.config()

//Function that sends email containing verification code

export const verificationCodeEmail = async (email,verificationCode) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD
            }
        })
        const message = {
            to: email,
            subject: "Verification Code",
            html:VERIFICATION_CODE.replace("{VERIFICATION_CODE}",verificationCode)
        };

        const info = await transporter.sendMail(message)
        console.log("Message sent, ", info.messageId)
    } catch (error) {
        console.log(error)
        throw new Error(error)        
    }
}

// A function that sends welcome email

export const welcomeEmail = async (email, fullname) => {
    try {
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}