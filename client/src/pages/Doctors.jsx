import axios from 'axios'
import { Loader } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Doctors() {
  const [doctor,setDoctor] = useState([])
  const [loading,setloading] = useState(true)
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
  if (loading) return <Loader className='flex justify-center items-center'/>
  return (
    <div className='mt-20 max-w-[90%] mx-auto bg-white'></div>
  )
}

export default Doctors