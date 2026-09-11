import { BookmarkX, BriefcaseMedicalIcon, CircleCheckBig, CircleDashed, NotebookPenIcon, Users2 } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Dashboard() {
    const [totalDoctors,setTotalDoctors] = useState(0)
    const [totalPatients,setTotalPatients] = useState(0)
    const [totalAppointments,setTotalAppointments] = useState(0)
    const [pending,setPending] = useState(0)
    const [approved,setApproved] = useState(0)
    const [canceled,setCanceled] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:5000/api/actions/totalDoctors')
        .then((response) => {
            if (response.data.success) {
                setTotalDoctors(response.data.results)
            } else {
                setTotalDoctors(null)
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    },[])
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/actions/totalPatients')
        .then((response) => {
            if (response.data.success) {
                setTotalPatients(response.data.results)
            } else {
                setTotalPatients(null)
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    },[])

     useEffect(() => {
        axios.get('http://localhost:5000/api/actions/totalAppointments')
        .then((response) => {
            if (response.data.success) {
                setTotalAppointments(response.data.results)
            } else {
                setTotalAppointments(null)
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    },[])

    useEffect(() => {
        axios.get('http://localhost:5000/api/actions/totalPending')
        .then((response) => {
            if (response.data.success) {
                setPending(response.data.results)
            } else {
                setPending(null)
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    },[])

    useEffect(() => {
        axios.get('http://localhost:5000/api/actions/totalApproved')
        .then((response) => {
            if (response.data.success) {
                setApproved(response.data.results)
            } else {
                setApproved(null)
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    },[])


    
  return (
    <div className='w-full md:max-w-[90%] px-2 mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-25'>
        <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <BriefcaseMedicalIcon className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>{totalDoctors}</h1>
                <p>Doctors</p>
            </div>
        </div>
       <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <Users2 className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>{totalPatients}</h1>
                <p>Patients</p>
            </div>
        </div>
         <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <NotebookPenIcon className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>{totalAppointments}</h1>
                <p>Appointments</p>
            </div>
        </div>
          <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <CircleDashed className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>{pending}</h1>
                <p>Pending</p>
            </div>
        </div>
       <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <CircleCheckBig className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>{approved}</h1>
                <p>Completed</p>
            </div>
        </div>
         <div className='p-4 bg-white rounded-md shadow-md flex items-center gap-5'>
            <BookmarkX className='h-10 w-10 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl text-3xl font-extrabold'>{canceled}</h1>
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