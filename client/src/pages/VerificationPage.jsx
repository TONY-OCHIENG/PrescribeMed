import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function VerificationPage() {
    const [verificationCode,setCode] = useState(["","","","","",""])
    const inputRef = useRef([])
    const [loading,setLoading] = useState(false)

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='p-4 bg-white rounded-md shadow-md'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text'>
		       Verify Your Email
		    </h2>
            <p className='text-sm text-gray-600'>Enter the 6-digit verification code sent to your email address.</p>
            <form action="" className='space-y-6'>
                <div className='flex justify-between mt-4'>
                    {
                        verificationCode.map((digit,index) => (
                            <input
                              key={index}
                              ref={(el) => (inputRef.current[index] = el)}
                              type='text'
							  maxLength='6'
							  value={digit}							  
							  className='w-12 h-12 text-center text-2xl font-bold bg-gray-100 text-blue-600 border-2 border-blue-600 rounded-lg focus:border-blue-600 focus:outline-none'
                            />
                        ))
                    }
                </div>
                <button className='w-full py-2 mt-2 bg-blue-600 text-white rounded-md font-extrabold'>Verify email</button>
            </form>
        </div>
    </div>
  )
}

export default VerificationPage