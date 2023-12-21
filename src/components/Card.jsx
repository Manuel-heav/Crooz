import React, { useEffect } from 'react'
import StarRating from './StarRating'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Card = ({offer}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <div className='z-10 bg-[#ede7e4] shadow-lg shadow-orange-300/40 drop-shadow-md overflow-hidden rounded-2xl mr-10  my-4' data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out">
        <img src={offer.linkImg} 
                className="h-40 w-full object-cover"
        
        />
        <div className='p-5 border border-b'>
            <h1 className='py-2 truncate'>{offer.title}</h1>
            <StarRating rating={offer.rating}/>
        </div>
        <h3 className='p-5 text-xl'>{offer.price}</h3>

        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {offer.category}
        </div>
    </div>
  )
}

export default Card