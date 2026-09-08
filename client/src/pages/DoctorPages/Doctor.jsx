import axios from 'axios'
import { Check, FolderOpen, HospitalIcon, NotebookPenIcon, Wallet, X } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { formatDate } from '../../components/Date'
import { toast } from 'react-hot-toast'

function Doctor() {
    const [doctor_id,setDoctorID] = useState([])
    const [appointment,setAppointment] = useState([])
    useEffect(() => {
            axios.get('http://localhost:5000/api/doctors/authDoctor')
            .then((response) => {
                console.log(response)
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

    useEffect(() => {
        axios.get(`http://localhost:5000/api/appointment/appointmentDoctor/${doctor_id.doctorID}`)
        .then((response) => {
            console.log(response)
            if (response.data.success) {
                setAppointment(response.data.results)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    },[doctor_id])

    const approveAppointment = (id) => {
        axios.put(`http://localhost:5000/api/appointment/approveAppointment/${id}`)
        .then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
                setTimeout(() => { 
                    window.location.reload()
                },2000)
            } else {
                toast.error("An error occured")
            }
        })
        .catch((err) => {
            console.log(err)
            toast.error("An error occured")
        })
    }

    const cancelAppointment = (id) => {
           axios.put(`http://localhost:5000/api/appointment/cancelAppointment/${id}`)
        .then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
                setTimeout(() => { 
                    window.location.reload()
                },2000)
            } else {
                toast.error("An error occured")
            }
        })
        .catch((err) => {
            console.log(err)
            toast.error("An error occured")
        })
    }
    
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
      <div className='w-full bg-white p-4 shadow-md rounded-md h-[400px] mt-10'>
            <h1 className='text-gray-600 font-extrabold'>Recent Appointments</h1>
          <div className='mt-2 overflow-auto bg-white shadow-md rounded-md h-[330px] p-2'>
           {
            appointment.length > 0 ?
                <table className='w-full text-left text-gray-600'>
                    <thead>
                        <th>Image</th>
                        <th>Patient</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Fee</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </thead>
                    <tbody className='p-2 '>
                        {
                            appointment.map((item) => (
                                 <tr className='text-xs even:bg-gray-100 even:bg-gray-100'>
                                    <td className='p-2'>
                                    <img src={`http://localhost:5000/images/`+ item.patient_image}  alt="" className='h-[50px] w-[50px] rounded-full' />
                                    </td>   
                                    <td>{item.patient_first_name} {item.patient_last_name}</td>
                                    <td>{item.patient_phone}</td>
                                    <td><img src={`http://localhost:5000/images/`+ item.doctor_image}  alt="" className='h-[50px] w-[50px] rounded-full' /></td>
                                    <td>{item.doctor_first_name} {item.doctor_last_name}</td>
                                    <td className='w-[200px]'>{formatDate(item.appointmentDate)}</td> 
                                    <td>{item.appointmentFee}</td>
                                    <td>{item.appointmentStatus}</td>   
                                    <td>
                                   <div className='flex gap-4'>
                                     <Check onClick={() => approveAppointment(item.appointment_id)} className='h-5 w-5  text-green-600 font-extrabold bg-green-100 rounded-full cursor-pointer'>
                                        <title>Approve</title>
                                     </Check>
                                    <X className='h-5 w-5 text-red-600 font-extrabold bg-red-100 rounded-full cursor-pointer'>
                                    <title>Cancel</title>
                                    </X>    
                                   </div>
                                    </td>                 
                                </tr>               
                            ))
                        }
                      
                    </tbody>
                </table>
               : <div className='w-full h-full flex flex-col justify-center items-center'>
               <FolderOpen className='h-20 w-20 text-blue-400'/>
               <h1 className='text-sm text-gray-600 '>No recent appointments</h1>
            </div>
           }
          </div>
        </div>
    </div>
  )
}

export default Doctor