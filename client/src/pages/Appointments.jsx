import React from 'react'

function Appointments() {
  return (
    <div className='w-full md:max-w-[90%] px-2 mx-auto '>
      <h1 className='mt-25 text-gray-600 font-extrabold'>Appointment history</h1>
       <div className='p-4 rounded-md shadow-md mt-4 bg-white h-[550px] overflow-y-auto overflow-x-auto'>
        <table className='w-full'>
            <thead className='text-xs text-left'>
                <th>Doctor's Image</th>
                <th>Doctor's Name</th>
                <th>Patient's Image</th>
                <th>Patient's Name</th>
                <th>Appointment Date</th>
                <th>Appointment Fee</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
        </table>
      </div> 
    </div>
  )
}

export default Appointments