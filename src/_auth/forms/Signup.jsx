import React from 'react'

const Signup = () => {
  return (
    <div className='lg:pt-[20px] px-10 lg:px-80'>
     <h1 className='text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600'>Driver Form Registration</h1>
     <p className='text-center text-sm mb-10 mt-2'>(Status will be pending until verified by admins)</p> 
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:">First Name (የመጀመሪያ ስም)</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:">Last Name (የአባት ስም)</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:">Address (አድራሻ)</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gullele" required/>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:">Car Owner's Phone Number (የመኪናው ባለቤት ስልክ ቁጥር)</label>
            <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required/>
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:">Car Owner's Full Name (የመኪናው ባለቤት ሙሉ ስም) </label>
            <input type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:">Vehicle Capacity (የመኪናው መጫን አቅም)</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:">Email Address (ኢሜይል)</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:">School Address (የትምህርት ቤት አድራሻ)</label>
        <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bole" required/>
    </div> 
    <div class="mb-6">
        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:">Liscence Plate Number (ታርጋ ቁጥር)</label>
        <input type="text" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A12345" required/>
    </div> 
    <div class="mb-6">
      
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:">ID image/ Driving licence (የመታወቂያ ወይም የመንጃ ፍቃድ ፎቶ)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

    </div>

    <div class="mb-6">
      
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:">Car Ownership Libre / Rental Contract Image (ሊብሬ ፎቶ)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

    </div>

    <div class="mb-6">
      
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:">Car Owner ID Image (የመኪናው ባለቤት ፎቶ)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

    </div>

    <div class="mb-6">
      
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:">Vehicle Photo (የመኪናው ፎቶ)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

    </div>
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>

    <button className='px-8 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800 mb-5'>ተመዝገቡ</button>


</form>

    </div>
  )
}

export default Signup