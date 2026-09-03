import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Profile() {
    const [patientId, setPatientID] = useState([])
    const [profile, setProfile] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/patients/authPatient')
        .then((response) => {
            if (response.data.success) {
                setPatientID(response.data.details)
            } else {
              navigate('/patient-Login')
            }
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    // fetching patient details from the database
    useEffect(() => {
        axios.get(`http://localhost:5000/api/patients/patientProfile/${patientId.patientID}`)
        .then((response) => {
            if (response.data.success) {
                setProfile(response.data.results)
            } 
        })
        .catch((error) => {
            console.log(error)
        })
    },[patientId])
  
  return (
    <div className='mt-20 w-full'>
        <div className='max-w-7xl md:w-[90%] mx-auto bg-white p-4 shadow-md rounded-xl flex justify-center items-center'>

        </div>
    </div>
  )
}

export default Profile