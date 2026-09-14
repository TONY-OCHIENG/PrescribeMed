import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <div id='contact' className='py-20 bg-gray-50'>

        <h1 className='text-center text-3xl text-gray-800 font-extrabold'>Reach us</h1>
        <p className='text-gray-600 mt-2 text-center'>We're here to help</p>
        <div className='md:w-[90%] mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4'>
          <div className='flex flex-col'>
            <h1 className='text-gray-600 text-md'>Send us message</h1>
            <form action="" className=''>
               <div className='flex gap-2'>
                 <div>
                    <label htmlFor="">First name</label>
                    <input type="text" className='p-2 w-full border rounded-md'/>
                    <label htmlFor="">Email</label>
                    <input type="text" className='p-2 w-full border rounded-md'/>
                </div>
                <div>
                    <label htmlFor="">Last name</label>
                    <input type="text" className='p-2 w-full border rounded-md'/>
                    <label htmlFor="">Phone</label>
                    <input type="text" className='p-2 w-full border rounded-md'/>
                </div>
               </div>
               <label htmlFor="">Message</label>
               <textarea name="" id="" className='w-full border rounded-md p-2 h-[100px]'></textarea>   
               <button className='mt-4 py-2 px-8 bg-blue-400 text-white font-extrabold rounded-md cursor-pointer'>Send message</button>             
            </form>
          </div>
          <div>
            <h1 className='text-gray-600'>Other ways to reach us</h1>
            <div className='flex flex-col'>
              <div className='p-4 border-b flex gap-10'>
                <div>
                  <Phone className='text-blue-600'/>
                </div>
                <div>
                  <h1 className='text-gray-600 font-extrabold'>Phone</h1>
                  <h1 className='text-sm mt-2 mb-2 font-extrabold'>+254716818554</h1>
                  <p className='text-sm text-gray-400'>Available 24/7 for urgent booking issues</p>
                </div>
              </div>
               <div className='p-4 border-b flex gap-10'>
                <div>
                  <Mail className='text-blue-600'/>
                </div>
                <div>
                  <h1 className='text-gray-600 font-extrabold'>Email</h1>
                  <h1 className='text-sm mt-2 mb-2 font-extrabold'>prescribemed@gmail.com</h1>
                  <p className='text-sm text-gray-400'>We reply within a few hours on weekdays</p>
                </div>
              </div>
               <div className='p-4 border-b flex gap-10'>
                <div>
                  <MapPin className='text-blue-600'/>
                </div>
                <div>
                  <h1 className='text-gray-600 font-extrabold'>Location</h1>
                  <h1 className='text-sm mt-2 mb-2 font-extrabold'>Prescribemed</h1>
                  <p className='text-sm text-gray-400'>14 Riverside Avenue, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            <div className='border-l-2 border-l-blue-600 bg-blue-50 p-8 rounded-md mt-10'>
              <h1 className='text-gray-600 font-extrabold'>Support hours</h1>
              <div className='flex justify-between text-sm mt-4 border-b'>
                <h1 className='text-gray-600 mb-2'>Phone & Chat</h1>
                <h1 className='text-gray-600 font-extrabold'>24/7</h1>
              </div>
                <div className='flex justify-between text-sm mt-4 border-b'>
                <h1 className='text-gray-600 mb-2'>Email & Billing</h1>
                <h1 className='text-gray-600 font-extrabold'>Mon–Fri, 8am–6pm</h1>
              </div>
                <div className='flex justify-between text-sm mt-4 border-b'>
                <h1 className='text-gray-600 mb-2'>Office visit</h1>
                <h1 className='text-gray-600 font-extrabold'>By appointment only</h1>
              </div>
            </div>
          </div>
        </div>      
    </div>
  )
}

export default Contact
