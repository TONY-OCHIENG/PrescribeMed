import axios from 'axios'
import { Delete, Loader, X } from 'lucide-react'
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
  const [category,setCategory] = useState([])
  const [active,setActive] = useState("All")
  useEffect(() => {
    fetchAllDoctors()
  },[])

  const fetchAllDoctors = () => {
    setloading(true)
    setActive("All")
     axios.get('http://localhost:5000/api/actions/getAllDoctors')
    .then((response) => {
      if (response.data.success) {
        setloading(false)
        setDoctor(response.data.results)
        setCategory(response.data.results)
      } else {
        setloading(true)
      }
    })
    .catch((error) => {
      console.log(error)
      setloading(true)
    })    
  }

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

  const menuItems = [...new Set(category.map((name) => name.speciality))]
  const filterItems = (item) => {
    const newItem = category.filter((categories) => categories.speciality === item)
    setDoctor(newItem)
    setActive(item)
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/actions/deleteSingleDoctor/${id}`)
    .then((response) => {
      if (response.data.success) {
          toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    })
    .catch((error) => {
      toast.error(error)
    })
    setTimeout(() => { window.location.reload()},3000)
  }
  return (
    <div className='relative'>
      <div className='relative mt-20 max-w-[90%] mx-auto screen flex flex-col justify-center items-center'>
           <div className='w-full p-2 mb-10 grid grid-cols-1 md:grid-cols-6 gap-4'>
               <button className={`border ${active === "All" ? "bg-blue-600 text-white" : ""} border-blue-600 rounded-full text-blue-600 p-2`} onClick={() => fetchAllDoctors()}>All</button>     
                  {
                      menuItems.map((val) => (
                          <button key={val} className={`border ${active === val ? "bg-blue-600 text-white" : "" } border-blue-600 cursor-pointer text-blue-600 font-bold p-2 rounded-full`} onClick={() => {filterItems(val)}}>{val}</button>
                      ))
                  }                    
          </div>          
      <div className={`absolute top-20 z-10 md:h-[500px] w-full md:w-[50%] bg-white rounded-xl shadow-md p-4 ${open ? "block" : "hidden"}`}>
        <h1 className='text-center font-extrabold'>Doctor's Details</h1>
        <X onClick={() => setOpen(!open)} className='absolute top-5 right-5 text-blue-600 cursor-pointer'/>
        <div>
          {
            singleDoctor.map((item) => (
              <div className='mt-4 flex md:flex-row flex-col gap-10'>
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
                  <button onClick={() => {handleDelete(item.doctors_id),setOpen(!open)}} className='mt-4 px-6 py-1 cursor-pointer rounded-md bg-red-400 text-white font-extrabold text-sm'>Delete</button>
               </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
        {loading ? <LoaderPage/> : doctor.map((item) => (
             <div onClick={() => fetchSingleDoctor(item.doctors_id)} key={item.doctors_id} className='rounded-md shadow-md p-2 cursor-pointer bg-white'>
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
      <div className={`${open ? "block" : "hidden"} absolute top-0 w-full h-[660px] bg-black/50`}></div>  
    </div>    
  )
}

export default Doctors