import { FolderOpen } from 'lucide-react'
import React from 'react'

function PAppointment() {
    let appointment = JSON.parse(localStorage.getItem("appointment")) || []
  return (
    <div className='mt-20 max-w-7xl md:w-[90%] mx-auto w-full px-2 flex flex-col gap-2'>
        <div className='w-full bg-white p-4 shadow-md rounded-md h-[300px]'>
            <div>
                <h1 className='text-gray-600 font-extrabold'>Book Appointment</h1>
            </div>
            <div className='w-full shadow-md rounded-md p-4 overflow-auto h-[250px]'>
                {
                    appointment?.length > 0 ? "" : <div className='w-full h-full flex justify-center items-center'>
                        <div className='flex flex-col gap-2 items-center'>
                            <FolderOpen className='h-20 w-20 text-blue-400'/>
                            <h1 className='text-gray-600 font-medium'>No appointments made</h1>
                        </div>
                    </div>
                }
            </div>
        </div>
        <div className='w-full bg-white p-4 shadow-md rounded-md h-[350px]'></div>
    </div>
  )
}

export default PAppointment