import databaseConnection from "../configs/db.js"

export const bookAppointment = (request,response) => {
    const { doctors_id, patient_id, date, appointmentFee } = request.body
    try {
        const insertAppointment = "INSERT INTO appointments(doctors_id,patient_id,appointmentDate,appointmentFee) VALUES(?,?,?,?)"
        databaseConnection.query(insertAppointment,[doctors_id,patient_id,date,appointmentFee], (error, results) => {
            if (error) return response.status(500).json({success: false, message: error})
            return response.status(200).json({success: true, message: "Appointment booked successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const appointmentHistory = (request,response) => {
    try {
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}