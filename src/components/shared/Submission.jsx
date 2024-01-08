import React from 'react';
import { Link } from 'react-router-dom';

const Submission = () => {
  return (
    <div class="flex items-center justify-center h-screen">
    <div class="p-[2px] rounded shadow-lg bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-500">
      <div class="flex flex-col items-center p-4 space-y-2 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-orange-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">Thank You !</h1>
        <p>Thank you for your interest! We will contact you shortly</p>
        <Link
        to={"/"}
          class=" mt-5 inline-flex items-center px-4 py-2 text-white bg-orange-600 border border-orange-600 rounded-full hover:bg-orange-700 focus:outline-none focus:ring">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span class="text-sm font-medium">
            Home
          </span>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Submission