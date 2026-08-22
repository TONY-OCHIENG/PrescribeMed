import React from 'react'

function VerificationPage() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='p-4 bg-white rounded-md shadow-md'>
             <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text'>
		       Verify Your Email
		      </h2>
              <p className='text-sm text-gray-600'>Enter the 6-digit verification code sent to your email address.</p>
        </div>
    </div>
  )
}

export default VerificationPage