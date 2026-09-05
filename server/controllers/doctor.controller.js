
export const loginDoctor = (request,response) => {
    const { email, password} = request.body

    if (!email || !password) {
        return response.status(200).json({success: false, message: "Fill all fields"})
    }

    try {
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
} 