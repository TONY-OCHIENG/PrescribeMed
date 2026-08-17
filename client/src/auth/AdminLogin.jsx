import React from 'react'
import Input from '../components/Input'
import { Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth"

function AdminLogin() {
    const [values,setValues] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        const { name, value} = event.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    axios.defaults.withCredentials = true

    const handleSubmit = async (event) => {
        event.preventDefault()
        axios.post(`${API_URL}/login`,values)
        .then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    }
 
  return (
    <div className='flex justify-center items-center h-screen px-2'>
        <form onSubmit={handleSubmit} className='max-w-md w-full rounded-xl shadow-xl p-2 bg-white/50 backdrop-blur-2xl'>
        <h1 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600
            text-transparent bg-clip-text'>Login Admin</h1>
              <Input
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
             <Input
                icon={Lock}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <button className='w-full text-white bg-gradient-to-r from-blue-400 to-blue-600 py-2
            font-extrabold cursor-pointer rounded-md text-xl
            '>Login</button>
        </form>      
    </div>
  )
}

export default AdminLogin