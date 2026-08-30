import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoaderPage from '../../components/LoaderPage'
import toast from 'react-hot-toast'
import { X } from 'lucide-react'

function PDashboard() {
    const [doctors,setDoctors] = useState([])
    const [loading,setLoading] = useState(false)
    const [singleDoctor,setSingleDoctor] = useState([])
    const [open,setOpen] = useState(false)
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
                 setOpen(!open)
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
        <div className='relative mt-20 max-w-7xl md:max-w-[90%] mx-auto w-full px-2 flex justify-center items-center'>
             <div className={`absolute top-20 z-10 md:h-[500px] w-full md:w-[50%] bg-white rounded-xl shadow-md p-4 ${open ? "block" : "hidden"}`}>
                <h1 className='text-center font-extrabold'>Doctor's Details</h1>
                <X onClick={() => setOpen(!open)} className='absolute top-5 right-5 text-blue-600 cursor-pointer'/>
                <div>
                {
                    singleDoctor.map((item) => (
                    <div key={item.doctors_id} className='mt-4 flex md:flex-row flex-col gap-10'>
                    <div className='md:w-[40%]'>
                        <img src={`http://localhost:5000/images/`+ item.image}  alt="" className='h-[200px] w-full' />
                    </div>
                    <div className='md:w-[80%]'>
                        <h1 className='text-gray-800 font-extrabold mt-2'>Dr, <span className='text-sm'>{item.firstName} {item.lastName}</span></h1>
                        <h3 className='text-gray-600 font-bold text-sm'>Specialization:  {item.speciality}</h3>
                        <h3 className='text-gray-600 font-bold text-sm'>Phone: {item.phone}</h3>
                        <h3 className='text-gray-600 font-bold text-sm'>Email: {item.email}</h3>
                        <h3 className='text-gray-600 font-bold text-sm'>Experience: {item.experience} years</h3>
                        <h3 className='text-gray-600 font-bold text-sm'>Fee: {item.appointmentFee} KSH</h3>
                        <span className='flex items-center text-sm gap-2 text-gray-600'>
                            <input type="checkbox" disabled={item.isAvaliable === 0} checked={item.isAvaliable === 1} readOnly/>
                            Available
                        </span>
                        <h3 className='text-gray-600 font-bold text-sm mt-3 border-b w-full'>About</h3>
                        <p className='text-sm mt-2 text-gray-500'>{item.about}</p>
                       <div className='flex flex-col'>
                         <input type="datetime-local" className='mt-2' />
                        <button onClick={() => {setOpen(!open)}} className='mt-3 px-6 py-2 cursor-pointer rounded-md bg-blue-400 text-white font-extrabold text-sm'>Book Appointment</button>
                       </div>
                    </div>
                    </div>
                    ))
                }
                </div>
            </div>
            <div className='w-full h-full grid grid-cols-2 md:grid-cols-5 gap-2'>
                {
                    loading ? <LoaderPage/> : doctors.map((item) => (
                          <div onClick={() => fetchSingleDoctor(item.doctors_id)} key={item.doctors_id} className='rounded-md shadow-md p-2 cursor-pointer bg-white'>
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
         <div className={`${open ? "block" : "hidden"} absolute top-0 w-full h-screen bg-black/50`}></div>  
    </div>
  )
}

export default PDashboard