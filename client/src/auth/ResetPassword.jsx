import { Loader, Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Input from '../components/Input'
import axios from 'axios'
import toast from 'react-hot-toast'

function ResetPassword() {
    const { id } = useParams()
    const [loading,setloading] = useState(false)
    const [password,setPassword] = useState({
      password:"",
      password_p: ""
    })

    const handleChange = (event) => {
      const { name, value} = event.target
      setPassword((prev) => ({
        ...prev,
        [name] : value
      }))
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      setloading(true)
      axios.post(`http://localhost:5000/api/patients/updatePassword/${id}`,password)
      .then((response) => {
        if (response.data.success) {
          setloading(false)
          toast.success(response.data.message)
        } else {
          setloading(false)
          toast.error(response.data.message)
        }
      })
      .catch((error) => {
        setloading(false)
        toast.error("An error occured")
      })
    }

  return (
         <div className='flex justify-center items-center h-screen px-2'>
        <form  onSubmit={handleSubmit} className='max-w-md w-full rounded-xl shadow-xl p-2 bg-white/50 backdrop-blur-2xl'>
        <h1 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600
            text-transparent bg-clip-text'>Reset Password</h1>
              <Input
                icon={Lock}
                type="password"
                name="password"
                onChange ={handleChange}
                placeholder="New password"
            />
             <Input
                icon={Lock}
                type="password"
                name="password_p"
                onChange ={handleChange}
                placeholder="Confirm password"
        
            />
           
            <button disabled={loading} className='w-full text-white bg-gradient-to-r from-blue-400 to-blue-600 py-2
            font-extrabold cursor-pointer rounded-md text-xl flex justify-center items-center
            '>{loading ? <Loader className='animate-spin'/> : "Reset "}</button>            
        </form>      
    </div>
  )
}

export default ResetPassword