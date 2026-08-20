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
    <div className='mt-20 max-w-[90%] mx-auto screen'>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
        {loading ? <LoaderPage/> : <DoctorsCard doctor={doctor}/>}
      </div>      
    </div>
  )
}

export default Doctors