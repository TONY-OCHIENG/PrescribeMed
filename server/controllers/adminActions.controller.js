
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
}