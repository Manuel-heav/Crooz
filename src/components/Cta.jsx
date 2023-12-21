import React, { useEffect } from 'react'
import { cta } from '../assets'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <div className='w-full bg-[#efe6e2] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
        <img src={cta} className="w-[650px] mx-auto" data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"/>
        <div data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">
            <h1 className='py-2  text-3xl font-semibold'>ትልቁን<span className='text-[#DB7C26]'> የኢትዮጵያ ትራንስፖርት አገናኝ ኤጀንሲን</span> ይቀላቀሉ</h1>
            <p className='py-2 text-lg text-gray-600'>Find Your Ideal Vehicle Now For Your Kids</p>
            <Link to="/sign-up-as-a-parent"><button className='px-8 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800 shadow-lg shadow-orange-600/50'>ተመዝገቡ</button></Link>
        </div>
    </div>
    

</div>
  )
}

export default Cta