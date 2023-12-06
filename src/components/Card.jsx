import React from 'react'
import StarRating from './StarRating'

const Card = ({offer}) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-10  my-4'>
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