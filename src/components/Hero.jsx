import React from 'react'
import { bus, ground, background, bg } from '../assets'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className={`bg-[#ede7e4] py-40 w-full min-h-screen md:h-screen p-2 relative overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[""] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[#4f311f] before:to-[#4f311f] before:opacity-[0.65] before:z-[-5]`} style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className='h-[75vh] md:max-w-[1480px] max-w-[600px] m-auto w-full px-4 flex flex-col md:flex-row justify-between items-center md:px-10'>
      <div 
       className='flex-2'
       >
        <div className='flex'>
            <img src={background} className='w-[100%] h-[100%] relative z-[5] mt-10 md:mt-0' />
        </div>
      </div>
        <div className='flex-1'>
          <h2 className="bg-clip-text bg-gradient-to-r text-2xl md:text-5xl md:mt-0 mt-10 font-extrabold text-[#fff] nokia"> አስተማማኝ ጉዞዎች፣ ጭንቀት አልባ ወላጆች</h2>
          <h1 class="mb-4 text-2xl font-extrabold text-[#fff] dark:text-white md:text-6xl lg:text-7xl">የተሻለ እና ምቹ ትራንስፖርት</h1>
          <p className="my-4 text-md md:text-xl text-white nokia">
          ክሩዝ ኃላፊነት የሚሰማቸውን አሽርካሪዎች ከወላጆች ጋር በማገናኘት ደህንነቱ የተጠበቀ የትምህርት ቤት መጓጓዣዎችን ያረጋግጣል። ለደህንነት ቅድሚያ በመስጠት፣ የእለት ተእለት ጉዞዎችን በመቀየር እንከን የለሽ እና አስተማማኝ ተሞክሮ ያቀርባል።</p>
          {/* <p className="mb-4 text-lg font-normal text-gray-800 dark:text-[#fff] nokia">ለደህንነት እና ቅልጥፍና ቅድሚያ በመስጠት፣ ለጥሩ መጓጓዣነት ተቀዳሚ ምርጫ ነው።</p> */}
          <a href="#faq" className="inline-flex items-center text-sm px-2 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800' hover:underline">
          Read More
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>  
          </a>
      </div>

      
    </div>
        {/* <img src={ground}  className='opacity-[.0]'/> */}
    </div>
  )
}

export default Hero