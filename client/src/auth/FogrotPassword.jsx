import { Loader, Lock, Mail } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import axios from 'axios'
import toast from 'react-hot-toast'

function FogrotPassword() {
    const [loading,setLoading] = useState(false)
    const [email, setEmail] = useState({
        email:''
    })
    
    const handleEmail = (event) => {
        const { name, value} = event.target
        setEmail((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/api/patients/reset-link',email)
        .then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
            toast.error("An error occured")
        })
    }

    return (
      <div className='flex justify-center items-center h-screen px-2'>
        <form  onSubmit={handleSubmit} className='max-w-md w-full rounded-xl shadow-xl p-2 bg-white/50 backdrop-blur-2xl'>       
            <p className='text-gray-600 font-extrabold text-center text-sm mb-2'>Enter your email address to recieve reset link</p>
              <Input
                icon={Mail}
                type="email"
                name="email"
                onChange={handleEmail}
                placeholder="Email"
            />             
            <button disabled={loading} className='w-full text-white bg-gradient-to-r from-blue-400 to-blue-600 py-2
            font-extrabold cursor-pointer rounded-md text-xl flex justify-center items-center
            '>{loading ? <Loader className='animate-spin'/> : "Submit"}</button>
            <p className='text-sm text-gray-600 mt-2'>Don't have an Account? <Link to={"/register"} className='font-extrabold text-md'>Click to register</Link></p>
        </form>      
    </div>
  )
}

export default FogrotPassword