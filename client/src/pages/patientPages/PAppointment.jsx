import { FolderOpen } from 'lucide-react'
import React from 'react'
import { formatDate } from '../../components/Date';

function PAppointment() {
    let appointment = JSON.parse(localStorage.getItem("appointment")) || []
    const now = new Date()
    const formatted = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
        });
  return (
    <div className='mt-20 max-w-7xl md:w-[90%] mx-auto w-full px-2 flex flex-col gap-2'>
        <div className='w-full bg-white p-4 shadow-md rounded-md h-[300px]'>
            <div>
                <h1 className='text-gray-600 font-extrabold'>Book Appointment</h1>
            </div>
            <div className='w-full shadow-md rounded-md p-4 overflow-auto h-[250px]'>
                {
                    appointment?.length > 0 ? appointment.map((items) => (<div className='flex justify-between md:flex-row flex-col mb-4'>
                        <div className='flex'>
                            <div><img src={`http://localhost:5000/images/`+ items.image}  alt="" className='h-[100px] w-[100px] object-cover' /></div>
                            <div className='ml-3'>
                                <h1 className='text-md text-gray-600 mb-2 font-extrabold'>Dr, {items.firstName} {items.lastName}</h1>
                                <h1 className='text-xs text-gray-600'>{items.speciality}</h1>
                                <h1 className='text-xs text-gray-600'>Phone: {items.phone}</h1>
                                <h1 className='text-xs text-gray-600'>Time: {formatDate(items.time)}</h1>
                            </div>
                        </div>
                        <div>hello</div>
                        
                    </div>)) : <div className='w-full h-full flex justify-center items-center'>
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