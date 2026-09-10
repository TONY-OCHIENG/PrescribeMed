import databaseConnection from "../configs/db.js"

export const bookAppointment = (request,response) => {
    const { doctors_id, patient_id, date, appointmentFee } = request.body
    //date convertion
    const newDate = date.replace('T', ' ') + ':00'
    try {
        const insertAppointment = "INSERT INTO appointments(doctors_id,patient_id,appointmentDate,appointmentFee) VALUES(?,?,?,?)"
        databaseConnection.query(insertAppointment,[doctors_id,patient_id,newDate,appointmentFee], (error, results) => {
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
        const appointments = "SELECT d.firstName AS doctor_first_name,d.lastName AS doctor_last_name, d.image AS doctor_image, p.first_name  AS patient_first_name, p.last_name AS patient_last_name, p.image_p AS patient_image, a.appointmentDate, a.appointmentStatus, a.appointmentFee FROM appointments a INNER JOIN doctors d ON d.doctors_id = a.doctors_id INNER JOIN patients p ON p.patient_id = a.patient_id ORDER BY a.appointmentDate DESC"
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

export const appointmentHistroryDoctor = (request,response) => {
    const { id } = request.params
    try {
        const appointmentDoctor = "SELECT d.firstName AS doctor_first_name, d.lastName AS doctor_last_name, d.image AS doctor_image, p.first_name AS patient_first_name, p.last_name AS patient_last_name, p.phone_p AS patient_phone, p.image_p AS patient_image, a.appointmentDate,a.appointment_id, a.appointmentStatus, a.appointmentFee FROM appointments a INNER JOIN doctors d ON d.doctors_id = a.doctors_id INNER JOIN patients p ON p.patient_id = a.patient_id WHERE a.appointmentStatus = 'pending' AND d.doctors_id = ? ORDER BY a.appointmentDate DESC"
        databaseConnection.query(appointmentDoctor,[id],(error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
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

export const appointmentsMade = (request,response) => {
      const { id } = request.params
    try {
        const appointmentDoctor = "SELECT d.firstName AS doctor_first_name, d.lastName AS doctor_last_name, d.image AS doctor_image, p.first_name AS patient_first_name, p.last_name AS patient_last_name, p.phone_p AS patient_phone, p.image_p AS patient_image, a.appointmentDate,a.appointment_id, a.appointmentStatus, a.appointmentFee FROM appointments a INNER JOIN doctors d ON d.doctors_id = a.doctors_id INNER JOIN patients p ON p.patient_id = a.patient_id WHERE d.doctors_id = ? ORDER BY a.appointmentDate DESC"
        databaseConnection.query(appointmentDoctor,[id],(error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
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

export const approveAppointment = (request,response) => {
    const { id } = request.params
    try {        
        const approveAppointment = "UPDATE appointments SET appointmentStatus = 'approved' WHERE appointment_id = ?"
        databaseConnection.query(approveAppointment,[id], (error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
            return response.status(200).json({success: true, message: "Appointment Approved"})
        })        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const cancelAppointment = (request,response) => {
       const { id } = request.params
    try {        
        const approveAppointment = "UPDATE appointments SET appointmentStatus = 'canceled' WHERE appointment_id = ?"
        databaseConnection.query(approveAppointment,[id], (error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
            return response.status(200).json({success: true, message: "Appointment canceled"})
        })        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const totalEarnings = (request,response) => {
    const { id } = request.params
    try {

        const totalEarnings = "SELECT SUM(appointmentFee) as TotalEarnings FROM appointments WHERE doctors_id = ? AND appointmentStatus = 'approved'"
        databaseConnection.query(totalEarnings,[id],(error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (results.length > 0) {
                return response.status(200).json({success: true, results: results[0].TotalEarnings})
            } else {
                return response.status(200).json({success: false})
            }
        })
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const totalAppointment = (request,response) => {
    const { id } = request.params
    try {
        const totalAppointment = "SELECT COUNT(appointmentStatus) AS totalAppointments FROM appointments WHERE doctors_id = ? AND appointmentStatus = 'pending'"
        databaseConnection.query(totalAppointment,[id],(error,result) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({success: true, result:result[0].totalAppointments })
            } else {
                return response.status(200).json({success: false})
            }
        })
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const totalPatients = (request, response) => {
    const { id } = request.params
    try {
        const totalPatients = "SELECT COUNT(DISTINCT patient_id) AS totalPatients FROM appointments WHERE doctors_id = ? AND appointmentStatus = 'pending'"
        databaseConnection.query(totalPatients,[id],(error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (results.length > 0) {
                return response.status(200).json({success: true, results:results[0].totalPatients})
            } else {
                return response.status(200).json({success: false})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const approvedAppointments = (request,response) => {
    const { id } = request.params
    try {
        const approvedAppointment = "SELECT COUNT(appointmentStatus) AS approvedAppointments FROM appointments WHERE doctors_id = ? AND appointmentStatus = 'approved'"
        databaseConnection.query(approvedAppointment,[id],(error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (results.length > 0) {
                return response.status(200).json({success: true, results:results[0].approvedAppointments})
            } else {
                return response.status(200).json({success: false})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const canceledAppointments = (request,response) => {
    const { id } = request.params
    try {
        const approvedAppointment = "SELECT COUNT(appointmentStatus) AS canceledAppointments FROM appointments WHERE doctors_id = ? AND appointmentStatus = 'canceled'"
        databaseConnection.query(approvedAppointment,[id],(error,results) => {
            if (error) return response.status(500).json({success: false, message: error})
            if (results.length > 0) {
                return response.status(200).json({success: true, results:results[0].canceledAppointments})
            } else {
                return response.status(200).json({success: false})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}