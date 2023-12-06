import React from 'react'
import { cta } from '../assets'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
        <img src={cta} className="w-[650px] mx-auto" />
        <div>
            <h1 className='py-2  text-3xl font-semibold'>Join <span className='text-[#DB7C26]'>The Biggest Ethiopia's</span> Transportation agency</h1>
            <p className='py-2 text-lg text-gray-600'>Find Your Ideal Vehicle Now For Your Kids</p>
            <Link to="/sign-in"><button className='px-8 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800'>ተመዝግቡ</button></Link>
        </div>
    </div>
    

</div>
  )
}

export default Cta