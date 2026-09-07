import axios from 'axios'
import { HospitalIcon, NotebookPenIcon, Wallet } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Doctor() {
    const [doctor_id,setDoctorID] = useState([])
    useEffect(() => {
            axios.get('http://localhost:5000/api/doctors/authDoctor')
            .then((response) => {
                if (response.data.success) {
                     setDoctorID(response.data.details)
                } else {
                    navigate("/doctor-login")
                }
            })
            .catch((error) => {
                console.log(error)
                navigate('/doctor-login')
            })
    },[])
    
  return (
    <div className='mt-20 max-w-7xl md:w-[90%] mx-auto px-2'>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
                <Wallet className='h-10 w-10 text-blue-500'/>
                <div className='flex flex-col'>
                    <h1 className='md:text-4xl text-3xl font-extrabold'>KSH 1000</h1>
                    <p>Earnings</p>
                </div>
             </div>
               <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
                <NotebookPenIcon className='h-10 w-10 text-blue-500'/>
                <div className='flex flex-col'>
                    <h1 className='md:text-4xl text-3xl font-extrabold'>10</h1>
                    <p>Appointments</p>
                </div>
             </div>
               <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
                <HospitalIcon className='h-10 w-10 text-blue-500'/>
                <div className='flex flex-col'>
                    <h1 className='md:text-4xl text-3xl font-extrabold'> 10</h1>
                    <p>Patients</p>
                </div>
             </div>     
               <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
                <Wallet className='h-10 w-10 text-blue-500'/>
                <div className='flex flex-col'>
                    <h1 className='md:text-4xl text-3xl font-extrabold'>KSH 1000</h1>
                    <p>Earnings</p>
                </div>
             </div>
               <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
                <NotebookPenIcon className='h-10 w-10 text-blue-500'/>
                <div className='flex flex-col'>
                    <h1 className='md:text-4xl text-3xl font-extrabold'>10</h1>
                    <p>Appointments</p>
                </div>
             </div>
               <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
                <HospitalIcon className='h-10 w-10 text-blue-500'/>
                <div className='flex flex-col'>
                    <h1 className='md:text-4xl text-3xl font-extrabold'> 10</h1>
                    <p>Patients</p>
                </div>
             </div>       
        </div>
        <h1 className='text-gray-600 mt-4 font-extrabold'>Recent Appointments</h1>
        <div className='bg-white p-4 rounded-md mt-3'></div>
    </div>
  )
}

export default Doctor