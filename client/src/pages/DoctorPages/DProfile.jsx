import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DProfile() {
   const [doctor_id,setDoctorID] = useState([])
   const [profile,setProfile] = useState([])
   const navigate = useNavigate()
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
        axios.get(`http://localhost:5000/api/doctors/doctorProfile/${doctor_id.doctorID}`)
        .then((response) => {
            console.log(response)
            if (response.data.success) {
                setProfile(response.data.results)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    },[doctor_id])

  return (
    <div></div>
  )
}

export default DProfile
