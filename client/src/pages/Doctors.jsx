import axios from 'axios'
import { Loader, X } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LoaderPage from '../components/LoaderPage'
import DoctorsCard from '../components/DoctorsCard'

function Doctors() {
  const [doctor,setDoctor] = useState([])
  const [loading,setloading] = useState(true)
  const [open, setOpen] = useState(false)

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

  return (
    <div className='relative'>
      <div className='relative mt-20 max-w-[90%] mx-auto screen flex justify-center items-center'>
      <div className='absolute top-20 z-10 h-[500px] w-full md:w-[50%] bg-white rounded-xl shadow-md p-4'>
        <h1 className='text-center font-extrabold'>Doctor's Details</h1>
        <X className='absolute top-5 right-5 text-blue-600 cursor-pointer'/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
        {loading ? <LoaderPage/> : doctor.map((item) => <DoctorsCard item={item}/>)}
      </div>    
     </div>
      <div className='absolute top-0 w-full h-[660px] bg-black/50 hidden'></div>  
    </div>    
  )
}

export default Doctors