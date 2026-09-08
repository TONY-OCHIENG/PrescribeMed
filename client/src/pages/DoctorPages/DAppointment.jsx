import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { formatDate } from '../../components/Date'

function DAppointment() {
    const [doctor_id, setDoctorID] = useState([])
    const [appointment, setAppointment] = useState([])
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
        axios.get(`http://localhost:5000/api/appointment/appointments/${doctor_id.doctorID}`)
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
    
  return (
        <div className='w-full md:max-w-[90%] px-2 mx-auto '>
            <h1 className='mt-25 text-gray-600 font-extrabold'>Appointment history</h1>
            <div className='p-4 rounded-md shadow-md mt-4 bg-white h-[550px] overflow-y-auto overflow-x-auto'>
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
                                </tr>               
                            ))
                        }
                      
                    </tbody>
                </table>
            </div> 
    </div>
  )
}

export default DAppointment
