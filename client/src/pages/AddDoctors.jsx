import React from 'react'
import Input from '../components/Input'
import { Calendar, Camera, DollarSignIcon, Loader, Lock, Mail, Phone, Stethoscope, User } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function AddDoctors() {
  const [value,setValues] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    password:'',
    speciality:'',
    experience:'',
    appointmentFee:'',
    about:'',
    image:''
  })
  const [loading,setLoading] = useState(false)
  const handleValueChange = (event) => {
    const { name, value} = event.target
    setValues((prev) => ({
      ...prev,
      [name] : value
    }))
  }
  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    const formData = new FormData()
    formData.append('firstName',value.firstName)
    formData.append('lastName',value.lastName)
    formData.append('phone',value.phone)
    formData.append('email',value.email)
    formData.append('password',value.password)
    formData.append('speciality',value.speciality)
    formData.append('experience',value.experience)
    formData.append('appointmentFee',value.appointmentFee)
    formData.append('about',value.about)
    formData.append('image',value.image)

    axios.post('http://localhost:5000/api/actions/addDoctor',formData) 
    .then((response) => {
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
        setLoading(false)
      }
    })
    .catch((error) => {
      console.log(error)
      toast.error("Something went wrong try again later")
      setLoading(false)
    })
  }
  return (
    <div className='w-full md:max-w-[90%] px-2 mx-auto flex items-center justify-center'>
      <div className='bg-white rounded-md shadow-md p-4 mt-25 w-full md:w-[60%] flex justify-center items-center'>
        <form action="" onSubmit={handleSubmit}>
          <div className='flex gap-10 w-full'>
             <Input
              icon={User}
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleValueChange}
              placeholder="First name"
            />     
             <Input
              icon={User}
              type="text"
              name="lastName"
              onChange={handleValueChange}
              placeholder="Last name"
            />       
          </div>
           <div className='flex gap-10 w-full'>
             <Input
              icon={Phone}
              type="text"
              name="phone"
              onChange={handleValueChange}
              placeholder="Phone number"
            />     
             <Input
              icon={Mail}
              type="email"
              name="email"
              onChange={handleValueChange}
              placeholder="Email"
            />       
          </div>  
           <div className='flex gap-10 w-full'>
             <Input
              icon={Lock}
              type="Password"
              name="password"
              onChange={handleValueChange}
              placeholder="Password"
            />     
             <Input
              icon={Stethoscope}
              type="text"
              name="speciality"
              onChange={handleValueChange}
              placeholder="Speciality"
            />       
          </div>  
           <div className='flex gap-10 w-full'>
             <Input
              icon={Calendar}
              type="number"
              name="experience"
              onChange={handleValueChange}
              placeholder="Years of expirience"
            />     
             <Input
              icon={DollarSignIcon}
              type="number"
              name="appointmentFee"
              onChange={handleValueChange}
              placeholder="Appointment fee"
            />       
          </div>  
           <div className='flex gap-10 w-full'>
             <Input
              icon={Camera}
              type="file"
              name="image"
              onChange={(event) => {setValues({...value, image: event.target.files[0]})}}
            />        
          </div>
          <textarea name="about" onChange={handleValueChange} placeholder="Doctor's description..." id="" className='p-2 border-blue-500 border outline:border-blue-500 w-full rounded-md h-[100px]'></textarea> 
          <button disabled={loading} className='py-2 px-8 bg-blue-500 text-white rounded-md font-extrabold mt-4 cursor-pointer disabled:opacity-80' type='submit'>
            {
              loading ? <Loader className='flex justify-center items-center animate-spin'/> : "Add Doctor"
            }
          </button>          
        </form>
      </div>
    </div>
  )
}

export default AddDoctors