import axios from 'axios'
import { BriefcaseMedical, icons, LayoutDashboard, NotebookPenIcon, Power, SquarePlus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth"
function Admin() {
    const [adminID,setAdminID] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get(`${API_URL}/authAdmin`)
        .then((response) => {
            if (response.data.success) {
                setAdminID(response.data.adminID)
            } else {
                navigate('/login')
            }
        })
    },[])
    const navLinks = [
        {name:"Dashboard",link:"/admin",icon:LayoutDashboard},
        {name:"Appointments",link:"/admin/appointments",icon:NotebookPenIcon},
        {name:"Doctors",link:"/admin/doctors",icon:BriefcaseMedical},
        {name:"Add doctors",link:"/admin/add-doctors",icon:SquarePlus}
    ]
    const handleLogout = () => {
        axios.get(`${API_URL}/logoutAdmin`)
        .then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/login')
            } else {
                toast.error("An error occured")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
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
        <div className='w-full'>
            <div className='w-full h-[8%] shadow-md p-4 flex items-center bg-white border-b'>
                <button onClick={handleLogout} className='py-2 px-6 absolute right-1 md:right-20 cursor-pointer bg-blue-500 flex justify-between items-center rounded-full'>
                     <Power className='mr-2 text-white'/>
                     <p className='text-white font-extrabold'>Logout</p>
                </button>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Admin