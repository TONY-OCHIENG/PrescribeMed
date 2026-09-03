import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Profile() {
    const [patientId, setPatientID] = useState([])
    const [profile, setProfile] = useState([])
    const [image, setImage] = useState([])
 
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
                setProfile(response.data.results[0])
                setImage(response.data.results[0].image_p)
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
                <img src={`http://localhost:5000/images/`+ image}   alt="" className='h-[100px] w-[100px] mb-2 rounded-full'/>
            </div>
            <label htmlFor="firstname">First name</label>
            <input type="text" name='first_name' value={profile.first_name} onChange={(event) => setProfile({...profile, first_name: event.target.value})} id='firstname' className='p-2 rounded-md border w-full'/>
            <label htmlFor="lastname">Last name</label>
            <input type="text" name='last_name' value={profile.last_name} onChange={(event) => setProfile({...profile, last_name: event.target.value})} id='lastname' className='p-2 rounded-md border w-full'/>
            <label htmlFor="email">Email</label>
            <input type="email" name='email_p' value={profile.email_p} onChange={(event) => setProfile({...profile, email_p: event.target.value})} id='email' className='p-2 rounded-md border w-full'/>
            <label htmlFor="phone_p">Phone</label>
            <input type="text" name='phone' value={profile.phone_p}  onChange={(event) => setProfile({...profile, phone_p: event.target.value})} id='phone' className='p-2 rounded-md border w-full'/>
            <label htmlFor="age">Age</label>
            <input type="number" name='age' value={profile.age}  onChange={(event) => setProfile({...profile, age: event.target.value})} id='age' className='p-2 rounded-md border w-full'/>
            <label htmlFor="image">Image</label>
            <input type="file" name='image_p' onChange={(event) => setProfile({...profile, image_p: event.target.value})} id='image' className='p-2 rounded-md border w-full'/>
            <button className='w-full py-2 bg-blue-500 font-extrabold text-white mt-4 rounded-md cursor-pointer'>Edit Profile</button>
          </form>
        </div>
    </div>
  )
}

export default Profile