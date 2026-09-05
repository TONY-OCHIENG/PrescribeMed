import axios from 'axios'
import { BriefcaseMedical, LayoutDashboard, NotebookPen, Power, SquarePlus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function DDashboard() {
    const [lastName, setLastName] = useState([])
    const navigate = useNavigate()
      const navLinks = [
        {name:"Dashboard",link:"/doctor",icon:LayoutDashboard},
        {name:"Appointments",link:"/admin/appointments",icon:NotebookPen},
        {name:"Doctors",link:"/admin/doctors",icon:BriefcaseMedical},
        {name:"Add doctors",link:"/admin/add-doctors",icon:SquarePlus}
    ]

    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('http://localhost:5000/api/doctors/authDoctor')
        .then((response) => {
            if (response.data.success) {
                 setLastName(response.data.details)
            } else {
                navigate("/doctor-login")
            }
        })
        .catch((error) => {
            console.log(error)
            navigate('/doctor-login')
        })
    },[])
    
  return (
     <div className='flex w-[100%] h-screen'>
        <div className='bg-white inset-y-0 left-0 w-[20%] md:w-[15%] border border-l'>
            <h1 className='text-center mt-4 md:block hidden text-md font-extrabold mb-4'>PRESCRIBEMED</h1>
            {
              navLinks.map((link,index) => (
                  <NavLink key={index} to={link.link} end className={({isActive}) => `relative flex items-center
                      max-md:justify-center gap-2 w-full rounded-2 py-2.5 min-md:pl-10 first:mt-6
                      text-gray-900 ${isActive && 'bg-blue-500 text-white group  rounded-md'}`}>
                      {({isActive}) => (
                          <>
                            <link.icon className={`w-5 h-5 text-blue-600 ${isActive && 'text-white'}`}/>
                            <p className='max-md:hidden'>{link.name}</p>
                          </>
                      )}
                  </NavLink>
              ))
            }
        </div>
        <div className='w-[80%] md:w-[85%] overflow-x-auto'>
            <div className='fixed w-full z-50 h-[8%] shadow-md p-4 flex items-center bg-white border-b'>
                    <div className='w-[80%]  flex justify-end items-center'>
                        <h1 className='text-xl text-gray-600 mr-5 font-extrabold'>Dr, {lastName.lastName}</h1>
                        <button onClick={() => handleLogout()} className='py-2 px-6 cursor-pointer bg-blue-500 flex justify-between items-center rounded-full'>
                        <Power className='mr-2 text-white'/>
                        <p className='text-white font-extrabold'>Logout</p>
                        </button>
                    </div>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default DDashboard