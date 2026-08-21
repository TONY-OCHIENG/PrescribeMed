import React from 'react'
import { categories } from '../pages/Data'

function Buttons({menuItems,filterItems,setItem}) {
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 gap-4 '>
        {
            menuItems.map((val) => (
                <button key={val} className='border border-blue-600 cursor-pointer text-blue-600 font-bold p-4 rounded-full' onClick={() => filterItems(val)}>{val}</button>
            ))
        }
        <button className='bg-black text-white p-2' onClick={() => setItem(categories)}>All</button>
    </div>
  )
}

export default Buttons