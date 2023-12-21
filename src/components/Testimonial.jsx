import React, { useEffect } from 'react'
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonial';

const Testimonial = () => {
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='w-full bg-white py-20' id='testimonial'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-10' data-aos="fade-up">
            <div className='py-4'>
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400 py-3 text-5xl font-bold">Parents' Feedback</span></h1>
              <p className='text-[#6D737A]'>Different parents have different things to say about Crooz.</p>
            </div>
            

            <Slider {...settings} className='px-5'>
              {testimonials.map((testimonial,i)=>
                  <TestimonialCard key={i} testimonial={testimonial}/>
                 )}
            </Slider>
        </div>

    </div>
  )
}

export default Testimonial