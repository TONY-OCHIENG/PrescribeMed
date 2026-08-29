import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoaderPage from '../../components/LoaderPage'
import toast from 'react-hot-toast'

function PDashboard() {
    const [doctors,setDoctors] = useState([])
    const [loading,setLoading] = useState(false)
    const [singleDoctor,setSingleDoctor] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/actions/getAllDoctors')
        .then((response) => {
            if (response.data.success) {
                setDoctors(response.data.results)
            }
        })
        .catch((error) => {
            console.log(error)
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
        <div className='mt-16 max-w-7xl md:max-w-[90%] mx-auto w-full px-2'>
            <div className='w-full h-full grid grid-cols-2 md:grid-cols-5 gap-2'>
                {
                    loading ? <LoaderPage/> : doctors.map((item) => (
                          <div  key={item.doctors_id} className='rounded-md shadow-md p-2 cursor-pointer bg-white'>
                                <img src={`http://localhost:5000/images/`+ item.image}  alt="" className='w-full h-50 object-cover'/>
                                <h1 className='text-gray-800 font-extrabold mt-2'>Dr, <span className='text-sm'>{item.firstName} {item.lastName}</span></h1>
                                <h3 className='text-gray-600 font-bold text-sm'>{item.speciality}</h3>
                                <span className='flex items-center text-sm gap-2 text-gray-600'>
                                    <input type="checkbox" disabled={item.isAvaliable === 0} checked={item.isAvaliable === 1}/>
                                    Available
                                </span>
                          </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PDashboard