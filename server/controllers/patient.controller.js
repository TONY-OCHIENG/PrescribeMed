import { hashPassword } from "../configs/hashPassword.js"

export const registerPatient = (request,response) => {
    const {first_name,last_name,email_p,phone_p,image_p,age,password_p} = request.body
    if (!first_name || !last_name || !email_p
        || !phone_p || !image_p || !password_p
    ) {
        return response.status(200).json({success: false, message: "Please fill all required fields"})
    }
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!regex.test(email_p)) {
        return response.status(200).json({success: false, message: "Enter a valid email address"})
    }

    if (password_p.length < 6) {
        return response.status(200).json({success: false, message: 'Password must be greater than five characters'})
    }

    const hpassword = hashPassword(password_p)

}