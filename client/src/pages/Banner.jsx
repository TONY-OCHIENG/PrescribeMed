import { Calendar, Clock, ShieldCheck, Stethoscope } from 'lucide-react'
import React from 'react'

function Banner() {
  return (
    <div className='w-full h-[100vh] bg-white'>
        <img src="/public/consultation_prescribemed.png" alt="" className='h-full w-full object-cover'/> 
        <div className='relative top-[-100%] p-4 rounded-md w-[100%] shadow-md bg-gradient-to-r from-white/50 via-white/80 to-transparent h-[100vh]'>
          <div className='md:w-[90%] mx-auto w-full h-full flex items-center'>
            <div className=' flex flex-col'>
                <div className='flex items-center'>
                    <img src="/public/ht.png" alt="" className='h-40 w-40 '/>
                    <div>
                    <h1 className='font-extrabold text-3xl'>PRESCRIBEMED</h1>
                    <p className='text-blue-400 font-extrabold'>Your health, Our priority.</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-6xl text-blue-600 font-extrabold'>Book Your</h1>
                    <h1 className='text-6xl text-blue-600 font-extrabold'>Medical Appointment</h1>
                    <p className='text-gray-600'>Get quality healthcare, when you need it.</p>
                    <p className='text-gray-600'>Quick, easy and secure appointment booking with trusted doctors.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 '>
                    <div className='flex flex-col items-center'>
                        <div className='p-2 h-15 w-15 flex justify-center items-center bg-blue-100 rounded-full'>
                            <Calendar className='text-blue-600'/>
                        </div>
                       <div className='text-center'>
                         <h1 className='text-gray-600 font-extrabold text-sm'>Book</h1>
                        <p  className='text-gray-600 font-extrabold text-sm'>Appointment</p>
                       </div>
                    </div>
                     <div className='flex flex-col items-center border-l-blue-700  border-l'>
                        <div className='p-2 h-15 w-15 flex justify-center items-center bg-blue-100 rounded-full'>
                            <Stethoscope className='text-blue-600'/>
                        </div>
                       <div className='text-center'>
                         <h1 className='text-gray-600 font-extrabold text-sm'>Choose</h1>
                        <p  className='text-gray-600 font-extrabold text-sm'>Your Doctor</p>
                       </div>
                    </div>
                     <div className='flex flex-col items-center border-l-blue-700  border-l'>
                        <div className='p-2 h-15 w-15 flex justify-center items-center bg-blue-100 rounded-full'>
                            <Clock className='text-blue-600'/>
                        </div>
                       <div className='text-center'>
                         <h1 className='text-gray-600 font-extrabold text-sm'>Save time</h1>
                        <p  className='text-gray-600 font-extrabold text-sm'>& avoid queues</p>
                       </div>
                    </div>
                     <div className='flex flex-col items-center border-l-blue-700  border-l'>
                        <div className='p-2 h-15 w-15 flex justify-center items-center bg-blue-100 rounded-full'>
                            <ShieldCheck className='text-blue-600'/>
                        </div>
                       <div className='text-center'>
                         <h1 className='text-gray-600 font-extrabold text-sm'>Safe &</h1>
                        <p  className='text-gray-600 font-extrabold text-sm'>Secure</p>
                       </div>
                    </div>                   
                </div>   
                <div className='mt-10'>
                   <button className='bg-blue-400 px-10 py-2 rounded-full font-extrabold cursor-pointer text-white'>Book Now</button>  
                </div>          
            </div>
            
          </div>
        </div>     
    </div>
  )
}

export default Banner
