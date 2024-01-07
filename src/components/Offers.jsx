import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { offers } from '../data/offers';

const Offers = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
  ]
  };

  return (
    <div className='w-full py-20 px-8 md:px-20' id='pricing'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px] md:px-0'>
            <div className='py-4'>
              <h1 class=" text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400 py-3 text-5xl font-bold amharic">ተመራጭ የመኪና አይነቶች</span></h1>
              <p className='text-[#000] text-center amharic'>አዲስ አበባ ውስጥ ለተማሪዎች የትራንስፖርት አገልግሎት የሚሰጡ መኪኖች</p>
            </div>
            
            <Slider {...settings} className='px-5'>
              {offers.map((offer,i)=>
                <div key={i}>
                  <Card offer={offer} />
                </div> ) }
            </Slider>
            
        </div>

    </div>
  )
}

export default Offers