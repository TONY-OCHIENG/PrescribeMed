import { FolderOpen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { formatDate } from '../../components/Date';
import axios from 'axios';
import { toast } from 'react-hot-toast'

function PAppointment() {
    const [patient_id, setPatientID] = useState([])
    const [appointments,setAppointment] = useState({
        patient_id: null,
        doctors_id: null,
        date:"",
        appointmentFee: null, 
    })
    let appointment = JSON.parse(localStorage.getItem("appointment")) || []
    const cancelAppointment = (id) => {
        const newAppointment = appointment.filter((item) => item.id !== id)
        localStorage.setItem("appointment",JSON.stringify(newAppointment))
        window.location.reload()
    }
    //getting patient id
    useEffect(() => {
            axios.get('http://localhost:5000/api/patients/authPatient')
            .then((response) => {
                if (response.data.success) {
                    setPatientID(response.data.details)
                } else {
                  navigate('/patient-Login')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    const handleBookAppointment = (id) => {
        const items = {
          patient_id: patient_id.patientID,
          doctors_id: id,
          date: appointment.map((time) => time.time)[0],
          appointmentFee: appointment.map((item) => item.fee)[0]
        }
        
    axios.post('http://localhost:5000/api/appointment/bookAppointment',items)
        .then((response) => {
                if (response.data.success) {
                    toast.success(response.data.message)
                    setTimeout(() => { cancelAppointment(id)},2000)
                } else {
                    toast.error("An error occured")
                }
        })
        .catch((error) => {
                console.log(error)
        })
       
    }
    
  return (
    <div className='mt-20 max-w-7xl md:w-[90%] mx-auto w-full px-2 flex flex-col gap-2'>
        <div className='w-full bg-white p-4 shadow-md rounded-md h-[300px]'>
            <div>
                <h1 className='text-gray-600 font-extrabold'>Book Appointment</h1>
            </div>
            <div className='w-full shadow-md rounded-md p-4 overflow-auto h-[250px]'>
                {
                    appointment?.length > 0 ? appointment.map((items) => (<div className='flex justify-between md:flex-row flex-col mb-4'>
                        <div className='flex'>
                            <div><img src={`http://localhost:5000/images/`+ items.image}  alt="" className='h-[100px] w-[100px] object-cover' /></div>
                            <div className='ml-3'>
                                <h1 className='text-md text-gray-600 mb-2 font-extrabold'>Dr, {items.firstName} {items.lastName}</h1>
                                <h1 className='text-xs text-gray-600'>{items.speciality}</h1>
                                <h1 className='text-xs text-gray-600'>Phone: {items.phone}</h1>
                                <h1 className='text-xs text-gray-600'>Time: {formatDate(items.time)}</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <button onClick={() => handleBookAppointment(items.id)} className='text-sm bg-green-200 text-gray-600 font-extrabold py-2 px-4 rounded-md cursor-pointer'>Pay {items.fee}/=</button>
                            <button onClick={() => cancelAppointment(items.id)} className='text-sm bg-red-200 text-gray-600 font-extrabold py-2 px-4 rounded-md cursor-pointer'>Cancel</button>
                        </div>
                        
                    </div>)) : <div className='w-full h-full flex justify-center items-center'>
                        <div className='flex flex-col gap-2 items-center'>
                            <FolderOpen className='h-20 w-20 text-blue-400'/>
                            <h1 className='text-gray-600 font-medium'>No appointments made</h1>
                        </div>
                    </div>
                }
            </div>
        </div>
        <div className='w-full bg-white p-4 shadow-md rounded-md h-[350px]'></div>
    </div>
  )
}

export default PAppointment