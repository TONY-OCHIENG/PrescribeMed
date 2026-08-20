import axios from 'axios'
import { Loader } from 'lucide-react'
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
    <div className='relative mt-20 max-w-[90%] mx-auto screen flex justify-center items-center'>
      <div className='absolute top-20 h-[500px] w-full md:w-[50%] bg-white rounded-xl shadow-md'></div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
        {loading ? <LoaderPage/> : doctor.map((item) => <DoctorsCard item={item}/>)}
      </div>      
    </div>
  )
}

export default Doctors