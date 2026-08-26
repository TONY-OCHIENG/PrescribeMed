import { Loader, Lock, Mail } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

function FogrotPassword() {
    const [loading,setLoading] = useState(false)
    const [email, setEmail] = useState({
        email_p:''
    })
    
    const handleEmail = (event) => {
        const { name, value} = event.target
        setEmail((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    return (
      <div className='flex justify-center items-center h-screen px-2'>
        <form  className='max-w-md w-full rounded-xl shadow-xl p-2 bg-white/50 backdrop-blur-2xl'>       
            <p className='text-gray-600 font-extrabold text-center text-sm mb-2'>Enter your email address to recieve reset link</p>
              <Input
                icon={Mail}
                type="email"
                name="email"
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