import { Calendar, CirclePlus, Clock, Heart, Lock, Notebook, Shield, Sun } from 'lucide-react'
import { name } from 'nodemailer/lib/package-info.js'
import React from 'react'

function About() {
    const aboutContent = [
        {
            name:"Booking",
            text:"Pick a specialist and a time slot in a few taps, then get a confirmed appointment no phone calls, no hold music.",
            icon:Calendar
        }, {
            name:"Verified providers",
            text:"Every doctor on the platform is licensed and credential-checked before they can take appointments.",
            icon:Shield
        }, {
            name:"Records & prescriptions",
            text:"Consultation notes and prescriptions land in your account automatically, ready to view or share with a pharmacy.",
            icon:Notebook
        }, {
            name:"Speciality",
            text:"General medicine, dermatology, mental health, pediatrics, and more matched to what you actually need.",
            icon:Heart
        }
    ]

    const patientChoose = [
        {
            name:"Privacy by default",
            text:"Your health data is encrypted end-to-end and never sold or shared with advertisers.",
            icon:Lock
        }, {
            name:"Clear pricing",
            text:"You see the consultation fee before you book no surprise charges afterward.",
            icon:CirclePlus
        }, {
            name:"Always reachable",
            text:"Support is available around the clock for booking help or technical issues.",
            icon:Clock
        }, {
            name:"Built with clinicians",
            text:"Our booking flow and triage questions are shaped by practicing physicians, not just designers.",
            icon:Sun
        }
    ]
  return (
    <div className='py-16 max-w-7xl mx-auto h-[100vh] md:w-[90%] px-2'>
        <h1 className='text-center text-4xl font-extrabold text-gray-800'>About</h1>
        <p className='text-center mt-5 text-gray-600 text-xl font-extrabold'>Care that meets you where you are</p>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
            {
                aboutContent.map((item) => (
                    <div className='bg-white rounded-md p-4 shadow-md flex items-center flex-col'>
                        <div className='p-2 h-15 w-15 flex justify-center items-center bg-blue-100 rounded-full'>
                            <item.icon className='text-blue-600'/>
                        </div>
                        <p className='text-sm text-blue-600 font-extrabold mt-2'>{item.name}</p>
                        <p className='text-sm mt-2 text-gray-600'>{item.text}</p>
                    </div>
                ))
            }
        </div>
        <div className='w-full p-4 shadow-md mt-10 bg-blue-50 border-l-4 rounded-l-xl border-l-blue-600'>
            <h1 className='text-xl font-extrabold text-gray-700'>Why patients stick with us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {
                    patientChoose.map((item) => (
                        <div className='flex gap-6'>
                            <div>
                               <item.icon className='text-blue-600'/>
                            </div>
                           <div>
                             <h1 className='text-gray-900 font-extrabold text-xl'>                                
                                {item.name}
                            </h1>
                            <p className='text-gray-600'>{item.text}</p>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About
