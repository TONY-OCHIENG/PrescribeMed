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
        const appointments = "SELECT d.firstName AS doctor_first_name,d.lastName AS doctor_last_name, d.image AS doctor_image, p.first_name  AS patient_first_name, p.last_name AS patient_last_name, p.image_p AS patient_image, a.appointmentDate, a.appointmentStatus, a.appointmentFee FROM appointments a INNER JOIN doctors d ON d.doctors_id = a.doctors_id INNER JOIN patients p ON p.patient_id = a.patient_id"
        databaseConnection.query(appointments,(error,results) => {
            if (error) return response.status(500).json({success: false, message: "Internal server error"})
            if (results.length > 0) {
                return response.status(200).json({success: true, results: results})
            } else {
                return response.status(200).json({success: false, message: "No appointments made"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}