import databaseConnection from "../configs/db.js"

export const loginDoctor = (request,response) => {
    const { email, password} = request.body

    if (!email || !password) {
        return response.status(200).json({success: false, message: "Fill all fields"})
    }

    try {
        const checkDoctor = "SELECT doctors_id,firstName,lastName,password FROM doctors WHERE email = ?"
        databaseConnection.query(checkDoctor,[email],(error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
        })        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
} 