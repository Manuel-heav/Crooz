import React, { useState } from 'react';
import { hamburgerMenu, close } from '../assets'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Header = () => {

    const [toggle,setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

  return (
    <div className='w-full h-[80px] bg-white border-b z-[4]'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <Link to="/">
                <h1 className="text-3xl font-extrabold">Crooz</h1>
            </Link>
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-4'>
                    <li className='hover:scale-[1.1] transition duration-700 ease-in-out'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:scale-[1.1] transition duration-700 ease-in-out'>
                        <a href="#about">About</a>
                    </li>
                    <li className='hover:scale-[1.1] transition duration-700 ease-in-out'>
                        <a href="#testimonial">Testimonial</a>
                    </li>
                    <li className='hover:scale-[1.1] transition duration-700 ease-in-out'>
                        <a href="#pricing">Pricing</a>
                    </li>
                </ul>
            </div>


            <div className='hidden md:flex'>
               <Link to="/sign-in"><motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}    className='px-8 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800'>ተመዝገቡ</motion.button></Link>
            </div>

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>
        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                     <li className='p-4'>
                        <Link to="/">Home</Link>
                    </li>
                    <li  className='p-4'>
                        <Link to="#about">About</Link>
                    </li>
                    <li  className='p-4'>
                        <Link to="#testimonial">Testimonial</Link>
                    </li>
                    <li  className='p-4'>
                        <a href="#pricing">Pricing</a>
                    </li>
                    <div className='flex flex-col my-4 gap-4'>
                    <Link to="/sign-in"><button className='px-8 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800'>ተመዝገቡ</button></Link>
                    </div>
            </ul>
        </div>      
    </div>
  )
}

export default Header