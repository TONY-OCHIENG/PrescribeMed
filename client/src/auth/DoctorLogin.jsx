import React, { useState } from 'react'
import Input from '../components/Input'
import { Loader, Lock, Mail } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function DoctorLogin() {
    const [doctor,setDoctor] = useState({
        email: "",
        password: ""
    })
    const [loading,setLoading] = useState(false)
    axios.defaults.withCredentials = true
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value} = event.target
        setDoctor((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        axios.post('http://localhost:5000/api/doctors/loginDoctor',doctor)
        .then((response) => {
            if (response.data.success) {
                setLoading(false)
                toast.success(response.data.message)
                navigate("/doctor")
            } else {
                setLoading(false)
                toast.error(response.data.message)
            }
        })
        .catch((error) => {
            toast.error("An error occured")
            setLoading(false)
        })
    }
  return (
      <div className='flex justify-center items-center h-screen px-2'>
        <form onSubmit={handleSubmit} className='max-w-md w-full rounded-xl shadow-xl p-2 bg-white/50 backdrop-blur-2xl'>
        <h1 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600
            text-transparent bg-clip-text'>Login Doctor</h1>
              <Input
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email"
                onChange = {handleChange}
            />
             <Input
                icon={Lock}
                type="password"
                name="password"
                placeholder="Password"  
                onChange = {handleChange}             
            />
            <button disabled={loading} className='w-full text-white bg-gradient-to-r from-blue-400 to-blue-600 py-2
            font-extrabold cursor-pointer rounded-md text-xl flex justify-center items-center
            '>{loading ? <Loader className='animate-spin'/> : "Login"}</button>
        </form>      
    </div>
  )
}

export default DoctorLogin