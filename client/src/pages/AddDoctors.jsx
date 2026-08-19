import React from 'react'
import Input from '../components/Input'
import { Calendar, Camera, DollarSignIcon, Lock, Mail, Phone, Stethoscope, User } from 'lucide-react'

function AddDoctors() {
  return (
    <div className='w-full md:max-w-[90%] px-2 mx-auto flex items-center justify-center'>
      <div className='bg-white rounded-md shadow-md p-4 mt-25 w-full md:w-[60%] flex justify-center items-center'>
        <form action="">
          <div className='flex gap-10 w-full'>
             <Input
              icon={User}
              type="text"
              placeholder="First name"
            />     
             <Input
              icon={User}
              type="text"
              placeholder="Last name"
            />       
          </div>
           <div className='flex gap-10 w-full'>
             <Input
              icon={Phone}
              type="text"
              placeholder="Phone number"
            />     
             <Input
              icon={Mail}
              type="email"
              placeholder="Email"
            />       
          </div>  
           <div className='flex gap-10 w-full'>
             <Input
              icon={Lock}
              type="Password"
              placeholder="Password"
            />     
             <Input
              icon={Stethoscope}
              type="text"
              placeholder="Speciality"
            />       
          </div>  
           <div className='flex gap-10 w-full'>
             <Input
              icon={Calendar}
              type="text"
              placeholder="Years of expirience"
            />     
             <Input
              icon={DollarSignIcon}
              type="number"
              placeholder="Appointment fee"
            />       
          </div>  
           <div className='flex gap-10 w-full'>
             <Input
              icon={Camera}
              type="file"
              placeholder="Image"
            />        
          </div>
          <textarea name="" placeholder="Doctor's description..." id="" className='p-2 border-blue-500 border outline:border-blue-500 w-full rounded-md h-[100px]'></textarea> 
          <button className='py-2 px-8 bg-blue-500 text-white rounded-md font-extrabold mt-4 cursor-pointer'>Add Doctor</button>          
        </form>
      </div>
    </div>
  )
}

export default AddDoctors