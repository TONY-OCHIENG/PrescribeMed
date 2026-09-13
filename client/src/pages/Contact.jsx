import React from 'react'

function Contact() {
  return (
    <div className='py-20 bg-gray-50'>

        <h1 className='text-center text-3xl text-gray-800 font-extrabold'>Reach us</h1>
        <p className='text-gray-600 mt-2 text-center'>We're here to help</p>
        <div className='md:w-[90%] mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-10cle mt-4'>
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
          </div>
        </div>      
    </div>
  )
}

export default Contact
