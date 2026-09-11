import { BookmarkX, BriefcaseMedicalIcon, CircleCheckBig, CircleDashed, FolderOpen, NotebookPenIcon, Users2 } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { formatDate, formatDates } from './../components/Date';

function Dashboard() {
    const [totalDoctors,setTotalDoctors] = useState(0)
    const [totalPatients,setTotalPatients] = useState(0)
    const [totalAppointments,setTotalAppointments] = useState(0)
    const [pending,setPending] = useState(0)
    const [approved,setApproved] = useState(0)
    const [canceled,setCanceled] = useState(0)
    const [appointments, setAppointment] = useState([])
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

    useEffect(() => {
        axios.get('http://localhost:5000/api/actions/totalCanceled')
        .then((response) => {
            if (response.data.success) {
                setCanceled(response.data.results)
            } else {
                setCanceled(null)
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    },[])

    useEffect(() => {
        axios.get("http://localhost:5000/api/appointment/recentAppointment")
        .then((response) => {
            if (response.data.success) {
                setAppointment(response.data.results)
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
    <div className='w-full bg-white p-4 shadow-md rounded-md h-[400px] mt-5'>
            <h1 className='text-gray-600 font-extrabold'>Recent Appointments</h1>
          <div className='mt-2 overflow-auto bg-white shadow-md rounded-md h-[330px] p-2'>
           {
            appointments.length > 0 ?
                <table className='w-full text-left text-gray-600'>
                    <thead>
                        <th>Image</th>
                        <th>Patient</th>
                        <th>Image</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Fee</th>
                        <th>Status</th>
                    </thead>
                    <tbody className='p-2 '>
                        {
                            appointments.map((item) => (
                                 <tr className='text-xs even:bg-gray-100'>
                                    <td className='p-2'>
                                    <img src={`http://localhost:5000/images/`+ item.patient_image}  alt="" className='h-[50px] w-[50px] rounded-full' />
                                    </td>   
                                    <td>{item.patient_first_name} {item.patient_last_name}</td>
                                    <td><img src={`http://localhost:5000/images/`+ item.doctor_image}  alt="" className='h-[50px] w-[50px] rounded-full' /></td>
                                    <td>{item.doctor_first_name} {item.doctor_last_name}</td>
                                    <td className='w-[200px]'>{formatDate(item.appointmentDate)}</td> 
                                    <td>{item.appointmentFee}</td>
                                    <td>{item.appointmentStatus}</td>                    
                                </tr>               
                            ))
                        }
                      
                    </tbody>
                </table>
               : <div className='w-full h-full flex justify-center items-center flex-col'>
               <FolderOpen className='h-20 w-20 text-blue-400'/>
               <h1 className='text-sm text-gray-600 font-extrabold'>No recent appoinmtents</h1>
            </div>
           }
          </div>
        </div>
    </div>    
  )
}

export default Dashboard