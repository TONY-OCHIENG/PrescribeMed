import React from 'react'
import { categories } from './Data'

function Buttons({menuItems,filterItems,setItem}) {
  return (
    <div className='grid grid-cols-5 gap-4 '>
        {
            menuItems.map((val) => (
                <button key={val} className='bg-black text-white p-2' onClick={() => filterItems(val)}>{val}</button>
            ))
        }
        <button className='bg-black text-white p-2' onClick={() => setItem(categories)}>All</button>
    </div>
  )
}

export default Buttons