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
          <form action="" className='p-4 rounded-md shadow-md max-w-md'>
            <div className='flex justify-center items-center'>
                <img src={`http://localhost:5000/images/`+ profile.map((item) => item.image_p)[0]}   alt="" className='h-[100px] w-[100px] mb-2 rounded-full'/>
            </div>
            <label htmlFor="firstname">First name</label>
            <input type="text" id='firstname' className='p-2 rounded-md border w-full'/>
            <label htmlFor="lastname">Last name</label>
            <input type="text" id='lastname' className='p-2 rounded-md border w-full'/>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className='p-2 rounded-md border w-full'/>
            <label htmlFor="phone">Phone</label>
            <input type="text" id='phone' className='p-2 rounded-md border w-full'/>
            <label htmlFor="age">Age</label>
            <input type="number" id='age' className='p-2 rounded-md border w-full'/>
            <label htmlFor="image">Image</label>
            <input type="file" id='image' className='p-2 rounded-md border w-full'/>
            <button className='w-full py-2 bg-blue-500 font-extrabold text-white mt-4 rounded-md cursor-pointer'>Edit Profile</button>
          </form>
        </div>
    </div>
  )
}

export default Profile