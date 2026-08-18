import { hashPassword } from "../configs/hashPassword.js"

export const addDoctors = (request,response) => {
    const {firstName,lastName, phone, email,password,speciality,experience,
        appointmentFee,
        about,
        image
    } = request.body

    if (
        !firstName || !lastName || !phone ||
        !email || !password || !speciality ||
        !experience || !appointmentFee || !about || !image
    ) {
        return response.status(200).json({success: false, message: "Please fill all fields"})
    }

    const hpassword = hashPassword(password)

    if (password.length < 6) {
        return response.status(200).json({success: false,message:"Password must be greater than five characters"})
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (!regex.test(email)) {
        return response.status(200).json({success: false, message: "Enter a valid Email address"})
    }
}