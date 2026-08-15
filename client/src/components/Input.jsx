import React from 'react'

function Input({icon:Icon,...props}) {
  return (
    <div className='relative mb-6'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <Icon className="h-6 text-blue-950"/>
        </div>
        <input
        {...props}
            className='w-full pl-10 pr-3 py-2 bg-gray-800/50 rounded-lg border border-blue-700
            focus:border-lue-600 focus:ring-blue-500 text-white placeholder-blue-400 transition
            duration-200'
        />
    </div>
  )
}

export default Input