import React from 'react'

function Banner() {
  return (
    <div className='w-full h-[100vh] bg-white'>
        <img src="/public/consultation_prescribemed.png" alt="" className='h-full w-full object-cover'/> 
        <div className='relative top-[-100%] p-4 rounded-md w-[100%] shadow-md bg-gradient-to-r from-white/50 via-white/50 to-transparent h-[100vh]'>
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
            </div>
          </div>
        </div>     
    </div>
  )
}

export default Banner
