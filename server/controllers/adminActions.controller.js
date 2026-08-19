import databaseConnection from "../configs/db.js"
import { hashPassword } from "../configs/hashPassword.js"

export const addDoctors = (request,response) => {
    const {firstName,lastName, phone, email,password,speciality,experience,
        appointmentFee,
        about,
    } = request.body
    console.log(request.body)
    if (
        !firstName || !lastName || !phone ||
        !email || !password || !speciality ||
        !experience || !appointmentFee || !about || !filename
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

    try {
        const checkEmail = "SELECT email FROM doctors WHERE email = ?"
        databaseConnection.query(checkEmail,[email],(error, result) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({success: false, message: "Email already exists"})
            } else {
                const insertDoctor = "INSERT INTO doctors(firstName,lastName,phone,email,password,speciality,experience,appointmentFee,image,about) VALUES(?,?,?,?,?,?,?,?,?,?)"
                databaseConnection.query(insertDoctor,[firstName,lastName,phone,email,hpassword,speciality,experience,appointmentFee,filename,about],
                    (erro, results) => {
                        if (error) return response.status(500).json({success: false, message: error})
                        return response.status(201).json({success: true, message: "Doctor added successfully"})
                    }
                )                
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message:"Internal server error"})
    }
}