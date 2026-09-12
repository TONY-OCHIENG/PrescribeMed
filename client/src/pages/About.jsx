import { Calendar, Heart, Notebook, Shield } from 'lucide-react'
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
  return (
    <div className='py-16 max-w-7xl mx-auto md:w-[90%] px-2'>
        <h1 className='text-center text-4xl font-extrabold text-gray-800'>About</h1>
        <p className='text-center mt-5 text-gray-600 text-xl font-extrabold'>Care that meets you where you are</p>
    </div>
  )
}

export default About
