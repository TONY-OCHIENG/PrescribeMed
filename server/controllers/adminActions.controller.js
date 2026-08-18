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
    
}