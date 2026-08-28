import { Loader, Lock, Mail } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function PatientLogin() {
    const [loading,setLoading] = useState(false)
    const [value, setValue] = useState({
        email_p:"",
        password:""
    })

    axios.defaults.withCredentials = true

    const handleValues = (event) => {
        const { name, value } = event.target
        setValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        axios.post('http://localhost:5000/api/patients/loginPatient',value)
        .then((response) => {
            if (response.data.success) {
                setLoading(false)
                toast.success(response.data.message)
                navigate("/patient")
            } else {
                setLoading(false)
                toast.error(response.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
            toast.error("An error occured")
        })
    }

  return (
        <div className='flex justify-center items-center h-screen px-2'>
        <form  onSubmit={handleSubmit} className='max-w-md w-full rounded-xl shadow-xl p-2 bg-white/50 backdrop-blur-2xl'>
        <h1 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600
            text-transparent bg-clip-text'>Welcome Back!</h1>
              <Input
                icon={Mail}
                type="email"
                name="email_p"
                onChange={handleValues}
                placeholder="Email"
                required
            />
             <Input
                icon={Lock}
                type="password"
                name="password"
                onChange={handleValues}
                placeholder="Password"
                required        
            />
            <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center gap-2'> 
                    <input type="checkbox" className='text-blue-600 h-4 w-4'/>
                    <span className='text-sm text-gray-600 font-extrabold'>Remember me</span>
                    
                </div>
                <Link to={"/forgot-password"} className='font-extrabold text-blue-600'>Forgot Password?</Link>
            </div>
            <button disabled={loading} className='w-full text-white bg-gradient-to-r from-blue-400 to-blue-600 py-2
            font-extrabold cursor-pointer rounded-md text-xl flex justify-center items-center
            '>{loading ? <Loader className='animate-spin'/> : "Login"}</button>
            <p className='text-sm text-gray-600 mt-2'>Don't have an Account? <Link to={"/register"} className='font-extrabold text-md'>Click to register</Link></p>
        </form>      
    </div>
  )
}

export default PatientLogin