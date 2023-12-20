import React from 'react'
import { bus, ground, background } from '../assets'
import { motion } from "framer-motion"

const Hero = () => {
  return (
   <div className='bg-[#ede7e4] py-20 w-full
   h-screen
   p-10
   relative
   overflow-hidden
   block
   z-10 
   bg-[url("https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]
   bg-cover
   bg-no-repeat
   bg-center
   before:content-[""]
   before:absolute
   before:inset-0
   before:block
   before:bg-gradient-to-r
   before:from-black
   before:to-black
   before:opacity-80
   before:z-[-5]'>
      <div className='h-[85vh] md:max-w-[1480px] max-w-[600px] m-auto w-full px-4 flex flex-col md:flex-row justify-between items-center md:px-10'>
        <div className='flex-1'>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600 text-5xl md:mt-0 mt-10 font-extrabold nokia"> አስተማማኝ ጉዞዎች፣ <span className='text-[#fff] nokia'>ጭንቀት አልባ ወላጆች</span></h2>
          <h1 class="mb-4 text-3xl font-extrabold text-[#fff] dark:text-white md:text-6xl lg:text-7xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400 nokia"><span className='text-[#fff] nokia'>የተሻለ እና ምቹ</span> ትራንስፖርት</span></h1>
          <p className="my-4 text-xl text-white nokia">
          ክሩዝ ኃላፊነት የሚሰማቸውን አሽርካሪዎች ከወላጆች ጋር በማገናኘት ደህንነቱ የተጠበቀ የትምህርት ቤት መጓጓዣዎችን ያረጋግጣል። ለደህንነት ቅድሚያ በመስጠት፣ የእለት ተእለት ጉዞዎችን በመቀየር እንከን የለሽ እና አስተማማኝ ተሞክሮ ያቀርባል።</p>
          <p className="mb-4 text-lg font-normal text-gray-800 dark:text-[#fff] nokia">ለደህንነት እና ቅልጥፍና ቅድሚያ በመስጠት፣ ለጥሩ መጓጓዣነት ተቀዳሚ ምርጫ ነው።
</p>
          <a href="#" className="inline-flex items-center text-sm px-2 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800' hover:underline">
          Read More
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>  
          </a>
      </div>

      <div 
       className='flex-2'
       >
        <div className='flex'>
            <img src={background} className='w-[100%] h-[100%] relative z-[5]' />
        </div>
      </div>
    </div>
        {/* <img src={ground}  className='opacity-[.0]'/> */}
    </div>
  )
}

export default Hero