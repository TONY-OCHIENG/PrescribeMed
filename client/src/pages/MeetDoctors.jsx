import { name } from 'nodemailer/lib/package-info.js'
import React from 'react'

function MeetDoctors() {
  const doctors = [
    {
      name:"John Doe",
      image:"/images/doctor1.png",
      specialization:"Pediatrics"
    }, {
      name:"Audrey Anne",
      image:"/images/doctor2.jpeg",
      specialization:"Internal medicine"
    }, {
      name:"Mark Doe",
      image:"/images/undefined_1787662651551.jpeg",
      specialization:"Pediatrics"
    }, {
      name:"Anne Gladys",
      image:"/images/undefined_1788163620831.jpeg",
      specialization:"Neurologist"
    }
  ]
  return (
    <div id='doctors' className='bg-gray-50 py-20'>
     <div className='md:w-[90%] mx-auto'>
        <h1 className='text-center text-gray-800 font-extrabold text-3xl'>Meet Our Professional Doctors</h1>   
        <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5'>
          {
            doctors.map((items) => (
              <div className='p-4 bg-white rounded-md shadow-md'>
                <img src={items.image} alt="" className='h-[300px] w-full object-cover object-center' />
                <div className='mt-1'>
                  <h1 className='text-md font-extrabold text-gray-600 text-xl'>Dr {items.name}</h1>
                  <p className='text-gray-600 text-sm'>Specialization: {items.specialization}</p>
                </div>
              </div>
            ))
          }  
        </div>  
      </div> 
    </div>
  )
}

export default MeetDoctors
