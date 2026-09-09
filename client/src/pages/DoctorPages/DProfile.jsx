import axios from 'axios'
import React, { useState } from 'react'

function DProfile() {
   const [doctor_id,setDoctorID] = useState([])
   const [profile,setProfile] = useState([])
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
    <div></div>
  )
}

export default DProfile
