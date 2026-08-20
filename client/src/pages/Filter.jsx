import React from 'react'
import Card from './Card'
import { categories } from './Data.js'
import { useState } from 'react'
import Buttons from './Buttons.jsx'

function Filter() {
    const [item,setItem] = useState(categories)
    const menuItems = [...new Set(categories.map((val) => val.name))]
    const filterItems = (cat) => {
        const newItem = categories.filter((ne) => ne.name === cat)
        setItem(newItem)
    }
    console.log(item)
  return (
    <div className='w-full h-full flex flex-col justify-center'>
        <Buttons menuItems={menuItems} filterItems={filterItems} setItem={setItem}/>
        <div className='mt-4'>
            <Card item={item}/>
        </div>
    </div>
  )
}

export default Filter