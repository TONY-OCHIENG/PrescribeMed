import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function DProfile() {
   const [doctor_id,setDoctorID] = useState([])
   const [profile,setProfile] = useState([])
    const [image, setImage] = useState([])
   const navigate = useNavigate()
   useEffect(() => {
            axios.get('http://localhost:5000/api/doctors/authDoctor')
            .then((response) => {
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
            if (response.data.success) {
                setProfile(response.data.result[0])
                setImage(response.data.result[0].image)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    },[doctor_id])

    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData()
      formData.append("firstName",profile.firstName)
      formData.append('lastName',profile.lastName)
      formData.append('email',profile.email)
      formData.append('phone',profile.phone)
      formData.append('experience',profile.experience)
      formData.append('image',profile.image)
      formData.append('speciality',profile.speciality)
      formData.append('appointmentFee',profile.appointmentFee)
      formData.append('about',profile.about)

      axios.post(`http://localhost:5000/api/doctors/updateDoctor/${doctor_id.doctorID}`,formData)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message)
        } else {
          toast.error("An error occured")
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error("An error occured")
      })
    }

  return (
     <div className='mt-20 w-full'>
        <div className='max-w-7xl md:w-[90%] mx-auto bg-white p-4 shadow-md rounded-xl flex justify-center items-center'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div>
            <img src={`http://localhost:5000/images/`+ image}   alt="" className='h-[200px] w-[200px]'/>
          </div>
            <form action="" className='p-4 rounded-md shadow-md'>
            <div className='flex justify-center items-center'>
               
            </div>
            <div className='flex gap-5'>
              <div>
                 <label htmlFor="firstname">First name</label>
                 <input type="text" name='firstName' value={profile.firstName} onChange={(event) => setProfile({...profile, firstName: event.target.value})} id='firstname' className='p-2 rounded-md border w-full'/>
              </div>
              <div>
                 <label htmlFor="lastname">Last name</label>
                 <input type="text" name='lastName' value={profile.lastName} onChange={(event) => setProfile({...profile, lastName: event.target.value})} id='lastname' className='p-2 rounded-md border w-full'/>
              </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[50%]'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={profile.email} onChange={(event) => setProfile({...profile, email: event.target.value})} id='email' className='p-2 rounded-md border w-full'/>
               </div>
               <div className='w-[50%]'>
              <label htmlFor="phone_p">Phone</label>
              <input type="text" name='phone' value={profile.phone}  onChange={(event) => setProfile({...profile, phone: event.target.value})} id='phone' className='p-2 rounded-md border w-full'/>
              </div>
            </div>

            <div className='flex gap-5 '>
              <div className='w-[50%]'>
                <label htmlFor="age">Experience</label>
                <input type="number" name='experience' value={profile.experience}  onChange={(event) => setProfile({...profile, experience: event.target.value})} id='age' className='p-2 rounded-md border w-full'/>
              </div>
              <div className='w-[50%]'>
                <label htmlFor="image">Image</label>
                <input type="file" name='image' onChange={(event) => {setProfile({...profile, image_p: event.target.files[0]})}} id='image' className='p-2 rounded-md border w-full'/>
              </div>            
            </div>   
             <div className='flex gap-5 '>
              <div className='w-[50%]'>
                <label htmlFor="speciality">Speciality</label>
                <input type="text" name='speciality' value={profile.speciality }  onChange={(event) => setProfile({...profile, speciality: event.target.value})} id='speciality' className='p-2 rounded-md border w-full'/>
              </div>
              <div className='w-[50%]'>
                <label htmlFor="appointmentFee">Appointment Fee</label>
                <input type="number" name='appointmentFee' value={profile.appointmentFee} onChange={(event) => {setProfile({...profile, appointmentFee: event.target.value})}} id='appointmentFee' className='p-2 rounded-md border w-full'/>
              </div>            
            </div>  
             <span className='flex items-center text-sm gap-2 text-gray-600'>
              <input type="checkbox" disabled={profile.isAvaliable === 0} checked={profile.isAvaliable === 1} readOnly/>
               {profile.isAvaliable === 1 ? "Available" : "Not available"}
            </span>
            <label htmlFor="about">About</label>
            <textarea name="about" id="about" value={profile.about} className='w-full h-[200px] border rounded-md p-2'></textarea>        
            <button type='submit' className='w-full py-2 bg-blue-500 font-extrabold text-white mt-4 rounded-md cursor-pointer'>Edit Profile</button>
          </form>
          <div className='flex gap-2'>
            <button className='border p-2 rounded-md cursor-pointer text-sm bg-green-300 text-white font-extrabold'>Available</button>
            <button className='border p-2 rounded-md cursor-pointer text-sm bg-red-300 text-white font-extrabold'>Not available</button>
          </div>
         </div>
        </div>
    </div>
  )
}

export default DProfile
