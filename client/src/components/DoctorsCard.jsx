import React from 'react'

function DoctorsCard({item}) {
    console.log(item)
  return (
    <div key={item.doctors_id} className='rounded-md shadow-md p-2 cursor-pointer bg-white'>
        <img src={`http://localhost:5000/images/`+ item.image}  alt="" className='w-full h-50 object-cover'/>
        <h1 className='text-gray-800 font-extrabold mt-2'>Dr, <span className='text-sm'>{item.firstName} {item.lastName}</span></h1>
        <h3 className='text-gray-600 font-bold text-sm'>{item.speciality}</h3>
        <span className='flex items-center text-sm gap-2 text-gray-600'>
            <input type="checkbox" disabled={item.isAvaliable === 0} checked={item.isAvaliable === 1}/>
            Available
        </span>
    </div>
  )
}

export default DoctorsCard