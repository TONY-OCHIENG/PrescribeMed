import axios from 'axios'
import { Loader, X } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LoaderPage from '../components/LoaderPage'
import toast from 'react-hot-toast'

function Doctors() {
  const [doctor,setDoctor] = useState([])
  const [loading,setloading] = useState(true)
  const [open, setOpen] = useState(false)
  const [singleDoctor,setSingleDoctor] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/actions/getAllDoctors')
    .then((response) => {
      if (response.data.success) {
        setloading(false)
        setDoctor(response.data.results)
      } else {
        setloading(true)
      }
    })
    .catch((error) => {
      console.log(error)
      setloading(true)
    })
  },[])

  const fetchSingleDoctor = (id) => {
    axios.get(`http://localhost:5000/api/actions/getSingleDoctor/${id}`)
    .then((response) => {
      if (response.data.success) {
        setSingleDoctor(response.data.result)
      } else {
        toast.error(response.data.message)
      }
    })
    .catch((error) => {
      toast.error(error)
    })
  }

  return (
    <div className='relative'>
      <div className='relative mt-20 max-w-[90%] mx-auto screen flex justify-center items-center'>
      <div className='absolute top-20 z-10 h-[500px] w-full md:w-[50%] bg-white rounded-xl shadow-md p-4'>
        <h1 className='text-center font-extrabold'>Doctor's Details</h1>
        <X className='absolute top-5 right-5 text-blue-600 cursor-pointer'/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
        {loading ? <LoaderPage/> : doctor.map((item) => (
             <div key={item.doctors_id} className='rounded-md shadow-md p-2 cursor-pointer bg-white'>
                  <img src={`http://localhost:5000/images/`+ item.image}  alt="" className='w-full h-50 object-cover'/>
                  <h1 className='text-gray-800 font-extrabold mt-2'>Dr, <span className='text-sm'>{item.firstName} {item.lastName}</span></h1>
                  <h3 className='text-gray-600 font-bold text-sm'>{item.speciality}</h3>
                  <span className='flex items-center text-sm gap-2 text-gray-600'>
                      <input type="checkbox" disabled={item.isAvaliable === 0} checked={item.isAvaliable === 1}/>
                      Available
                  </span>
            </div>
        ))} 
      </div>    
     </div>
      <div className='absolute top-0 w-full h-[660px] bg-black/50 hidden'></div>  
    </div>    
  )
}

export default Doctors