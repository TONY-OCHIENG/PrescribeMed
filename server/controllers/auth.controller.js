import jwt from 'jsonwebtoken'

export const adminLogin = (request,response) => {
    const { email, password} = request.body
    if (!email || !password) {
        return response.status(200).json({success: false, message:"Fill all fields"})
    }
}