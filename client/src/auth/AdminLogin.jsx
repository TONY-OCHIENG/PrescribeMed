import React from 'react'
import Input from '../components/Input'
import { Lock, Mail } from 'lucide-react'
import { useState } from 'react'

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
    
    const handleSubmit = async (event) => {
        event.preventDefault()
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