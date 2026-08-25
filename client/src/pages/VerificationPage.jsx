import { Loader } from 'lucide-react'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function VerificationPage() {
    const [verificationCode,setCode] = useState(["","","","","",""])
    const inputRef = useRef([])
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (index,value) => {
        const newCode = [...verificationCode]
        //handling pasted content
        if (value.length > 1) {
            const pasteCode = value.slice(0,6).split("");
            for (let i = 0; i < 6 ; i++) {
                newCode[i] = pasteCode[i] || ""
            }

            setCode(newCode)
            // Focus on the last non-empty input or the first empty one
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRef.current[focusIndex].focus();
        } else {
            newCode[index] = value
            setCode(newCode)
            //Move the focus to the next input field if the value is entered
            if (value && index < 5) {
                inputRef.current[index + 1].focus()
            }
        }      
    }

    const handlekey = (index,e) => {
      if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
			inputRef.current[index - 1].focus();
		 }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const code = verificationCode.join("")
        setLoading(true)
        axios.post("http://localhost:5000/api/patients/verifyEmail",{code})
        .then((response) => {
            if (response.data.success) {
                setLoading(false)
                toast.success(response.data.message)
                navigate("/patient-login")
            } else {
                setLoading(false)
                toast.error(response.data.message)
            }
        })
        .catch((error) => {
            setLoading(false)
            console.log(error)
            toast.error("An error occured")
        })
        
        
    }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='p-4 bg-white rounded-md shadow-md'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text'>
		       Verify Your Email
		    </h2>
            <p className='text-sm text-gray-600'>Enter the 6-digit verification code sent to your email address.</p>
            <form action="" className='space-y-6' onSubmit={handleSubmit}>
                <div className='flex justify-between mt-4'>
                    {
                        verificationCode.map((digit,index) => (
                            <input
                              key={index}
                              ref={(el) => (inputRef.current[index] = el)}
                              type='text'
							  maxLength='6'
							  value={digit}
                              onChange={(e) => handleChange(index, e.target.value)}	
                              onKeyDown={(e) => handlekey(index, e)}					  
							  className='w-12 h-12 text-center text-2xl font-bold bg-gray-100 text-blue-600 border-2 border-blue-600 rounded-lg focus:border-black focus:outline-none'
                            />
                        ))
                    }
                </div>
                <button disabled={loading || verificationCode.some((digit) => !digit)} className='cursor-pointer flex justify-center disabled:opacity-65 items-center w-full py-2 mt-2 bg-blue-600 text-white rounded-md font-extrabold'>{
                     loading ? <Loader className='animate-spin text-xl'/> : "Verify Email"
                    }                    
                </button>
            </form>
        </div>
    </div>
  )
}

export default VerificationPage