import React, { useEffect } from 'react'
import { cta } from '../assets'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])
  return (
    <div className='w-full bg-[#efe6e2] py-24'>
<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-[#421f11] bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ትልቁን የኢትዮጵያ ትራንስፖርት አገናኝ ኤጀንሲን ይቀላቀሉ</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">እንደ ሹፌር ወይም እንደ ቤተሰብ ለመመዝገብ ከታች ያለውምን በተን ይጫኑ</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="/sign-up-as-a-driver" class="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-[#DB7C26] focus:ring-4 focus:ring-blue-300 dark:focus:ring-orange-900">
                እንደ ሹፌር ይመዝገቡ
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to="/sign-up-as-a-parent" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-lg font-medium text-center text-white rounded-lg border border-white hover:bg-[#a87a66] focus:ring-4 focus:ring-gray-400">
                እንደ ቤተሰብ ይመዝገቡ
            </Link>  
        </div>
    </div>
</section>
</div>
  )
}

export default Cta