import React from 'react'
import Input from '../components/Input'
import { Calendar, Camera, Lock, Mail, Phone, User } from 'lucide-react'
import { useState } from 'react'

function PatientRegistration() {
  const [patients,setPatients] = useState({
    first_name:"",
    last_name:"",
    email_p:"",
    phone_p:"",
    image_p:"",
    age:"",
    password:""
  })

  const handleChange = (event) => {
    const { name, value} = event.target
    setPatients((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  return (
    <div className='flex justify-center items-center w-full h-full'>
        <form className='md:max-w-md px-2 w-full bg-white/50 p-4 rounded-xl shadow-md'>
           <h1 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600
            text-transparent bg-clip-text'>Register Account</h1>
            <Input
            icon={User}
            name="fisrt_name"
            type="text"
            onChange={handleChange}
            placeholder="First name"
            required
            />
             <Input
            icon={User}
            name='last_name'
            onChange={handleChange}
            type="text"
            placeholder="Last name"
            required
            />
             <Input
            icon={Mail}
            placeholder="Email"
            type="email"
            name="email_p"
            onChange={handleChange}
            required
            />
             <Input
            icon={Phone}
            placeholder="Phone"
            type="text"
            name="phone_p"
            onChange={handleChange}
            required
            />
             <Input
            icon={Camera}
            type="file"
            name="image_p"
            onChange={(event) => {setPatients({...value, image_p: event.target.files[0]})}} 
            placeholder="Image"
            />
            <Input
            icon={Calendar}
            type="number"
            name="age"
            onChange={handleChange}
            placeholder="Age"
            />
             <Input
            icon={Lock}
            type="password"
            name="password_p"
            onChange={handleChange}
            placeholder="Password"
            />
           <button className='w-full text-white bg-gradient-to-r from-blue-400 to-blue-600 py-2
            font-extrabold cursor-pointer rounded-md text-xl flex justify-center items-center
            '>Register</button>
            <p className='text-xs mt-4 text-gray-600'>Already have an Account? <span className='font-extrabold'>Click to login</span></p>
        </form>
    </div>
  )
}

export default PatientRegistration