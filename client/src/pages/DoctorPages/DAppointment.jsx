import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DAppointment() {
    const [doctor_id, setDoctorID] = useState([])
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
                </table>
            </div> 
    </div>
  )
}

export default DAppointment
