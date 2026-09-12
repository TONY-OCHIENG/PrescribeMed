import { Quote } from 'lucide-react'
import React from 'react'

function Testimonials() {
    const testimonials = [
        {
            name:"Amara K.",
            test:"I booked an appointment during my lunch break and was speaking with a doctor by 2 PM the same day. No waiting room, no rearranging my whole schedule just logged in and got seen."
        }, {
            name:"David O.",
            test:"My father lives three hours away and has trouble getting to specialists. Being able to book him a dermatology consult from his living room has been a genuine relief for our whole family."
        }, {
            name:"Priya N.",
            test:"I was skeptical about video consultations at first, but the doctor was thorough, asked the right questions, and sent my prescription straight to my pharmacy before we even hung up."
        }, {
            name:"Michael T.",
            test:"As someone managing a chronic condition, being able to rebook a follow-up in under a minute  without calling the clinic and waiting on hold  has made staying on top of my care so much easier."
        }
    ]
  return (
    <div className='py-20 bg-white'>
    <div className='max-w-7xl md:w-[90%] mx-auto px-2'>
        <h1 className='text-center text-gray-800 font-extrabold text-3xl'>What our clients say</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
            {
                testimonials.map((item) => (
                    <div className='shadow-md rounded-md p-4 bg-white'>
                        <p className='text-gray-600'><Quote className='rotate-180'/> {item.test}</p>
                       <div>
                         <p className=''>{item.name}</p>
                       </div>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Testimonials
