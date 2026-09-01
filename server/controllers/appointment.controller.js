
export const bookAppointment = (request,response) => {
    const { doctors_id, patient_id, date, appointmentFee } = request.body
    try {
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}