
export const registerPatient = (request,response) => {
    const {first_name,last_name,email_p,phone_p,image_p,age,password_p} = request.body
    if (!first_name || !last_name || !email_p
        || !phone_p || !image_p || !password_p
    ) {
        return response.status(200).json({success: false, message: "Please fill all required fields"})
    }

    
}