import { BookmarkX, BriefcaseMedicalIcon, CircleCheckBig, CircleDashed, NotebookPenIcon, Users2 } from 'lucide-react'
import React from 'react'

function Dashboard() {
  return (
    <div className='w-full md:max-w-[90%] px-2 mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-25'>
        <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <BriefcaseMedicalIcon className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>10</h1>
                <p>Doctors</p>
            </div>
        </div>
       <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <Users2 className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>10</h1>
                <p>Patients</p>
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
            <CircleDashed className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>10</h1>
                <p>Pending</p>
            </div>
        </div>
       <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <CircleCheckBig className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>10</h1>
                <p>Completed</p>
            </div>
        </div>
         <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <BookmarkX className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>10</h1>
                <p>Canceled</p>
            </div>
        </div>
      </div>
      <h1 className='text-gray-600 mt-10 font-extrabold'>Recent Appointments</h1>
      <div className='p-4 rounded-md shadow-md mt-5 bg-white h-[320px] overflow-y-auto overflow-x-auto'>
        <table className='w-full'>
            <thead className='text-xs text-left'>
                <th>Doctor's Image</th>
                <th>Doctor's Name</th>
                <th>Patient's Image</th>
                <th>Patient's Name</th>
                <th>Appointment Date</th>
                <th>Appointment Fee</th>
                <th>Status</th>
            </thead>
        </table>
      </div>      
    </div>    
  )
}

export default Dashboard