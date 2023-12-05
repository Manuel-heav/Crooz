import React from 'react'
import { quotationMark } from '../assets'

const TestimonialCard = ({testimonial}) => {
  console.log(testimonial)
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={testimonial.profileImg} className='h-10 w-10 rounded-full'/>
                <div>
                    <h1>{testimonial.name}</h1>
                    <p>{testimonial.school}</p>
                </div>
            
            </div>
            <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>{testimonial.comment}</h3>
      </div>
    </div>
  )
}

export default TestimonialCard