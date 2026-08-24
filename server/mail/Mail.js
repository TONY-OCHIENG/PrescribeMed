import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
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
            html:""
        };

        const info = await transporter.sendMail(message)
    } catch (error) {
        
    }
}