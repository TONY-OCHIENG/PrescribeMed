import React from 'react'

function Card({item}) {
  return (
    <div className='p-2 rounded-md bg-white shadow-md grid grid-cols-4 gap-10'>
        {
            item.map((items) => (
                <div key={items.id} className='bg-gray-100 p-4'>
                <p>{items.name}</p>
                <p>{items.slug}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Card