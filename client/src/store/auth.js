import axios from "axios";
import { create } from "zustand";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth";
const auth = create((set) => ({
    isLoading: true,
    message: null,
    success:null,
    
    loginAdmin: async (values) => {
        try {
            const response = await axios.post(`${API_URL}/login`, values);
		    set({isLoading: false, message: response.data.message, success:response.data.success})
        } catch (error) {
            set({isLoading: false,message: error})            
        }
    }
}))

export default auth