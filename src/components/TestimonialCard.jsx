import React, { useEffect } from 'react'
import { quotationMark } from '../assets'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TestimonialCard = ({testimonial}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])
  return (
    <div className='bg-[#e9c6b5] p-8 rounded-3xl shadow-xl shadow-orange-300/40 my-8 mx-2' data-aos="fade-right"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out">
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={testimonial.profileImg} className='h-10 w-10 rounded-full'/>
                <div>
                    <h1>{testimonial.name}</h1>
                    <p>{testimonial.school}</p>
                </div>
            
            </div>
            {/* <img className='h-8' src={quotationMark} /> */}
      </div>

      <div className='py-8'>
        <h3 className='text-lg amharic'>{testimonial.comment}</h3>
      </div>
    </div>
  )
}

export default TestimonialCard