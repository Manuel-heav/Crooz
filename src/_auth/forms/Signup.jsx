import React, { useState } from 'react'
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../../util/Firebase';
import { Link } from 'react-router-dom';
import Loader from '../../components/shared/Loader'
import Submission from '../../components/shared/Submission'

const Signup = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [fullName, setFullName] = useState("")
    const [vehicleCapacity, setVehicleCapacity] = useState(0)
    const [email, setEmail] = useState("")
    const [schoolAddress, setSchoolAddress] = useState("")
    const [liscence, setLiscence] = useState("")
    const [id, setId] = useState(null) // id
    const [libre, setLibre] = useState(null) //libre
    const [photo, setPhoto] = useState(null) // Car owner's image
    const [vehicle, setVehicle] = useState(null) //vehichle photo
    const [business, setBusiness] = useState(null) //business liscence
    const [loading, setLoading] = useState(false); 
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleUpload(); 
    };

    const handleUpload = () => {
        const imageInputs = [id, libre, photo, vehicle, business];
        setLoading(true);
      
        const uploadPromises = imageInputs.map((image) => {
          if (image) {
            const storageReference = storageRef(storage, `images/${image.name}`);
            return uploadBytes(storageReference, image).then((snapshot) => {
              return getDownloadURL(snapshot.ref);
            });
          }
          return null;
        });
      
        Promise.all(uploadPromises)
          .then((urls) => {
            // All uploads are complete, proceed with database update
            const [idUrl, libreUrl, photoUrl, vehicleUrl, businessUrl] = urls;
      
            addDoc(collection(db, 'driverForm'), {
                firstName: firstName,
                lastName: lastName,
                address: address,
                fullName: fullName,
                liscence: liscence,
                phoneNumber: phoneNumber,
                vehicleCapacity: vehicleCapacity,
                email: email,
                schoolAddress: schoolAddress,
                idUrl: idUrl,
                libreUrl: libreUrl,
                photoUrl: photoUrl,
                vehicleUrl: vehicleUrl,
                businessUrl: businessUrl
              });

              setLoading(false);
              setFormSubmitted(true);
            })
          .catch((error) => {
            console.error("Error uploading files:", error);
            alert("Error uploading files. Please try again.");
            setLoading(false);
          });
      };
  return (
    <div className='lg:pt-[20px] pt-10 px-10 lg:px-80 bg-[#ece2de]'>
        {loading ? (
        <Loader />
      ) :  !formSubmitted ? (
        <div>
                <h1 className='text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600'>Driver Form Registration</h1>
                <p className='text-center text-sm mt-2'>(Status will be pending until verified by admins)</p> 
                <Link to={"/sign-up-as-a-parent"}>
                    <p className='text-orange-600 hover:underline text-center mb-10 mt-2 '>Are you a parent? Register here!</p>
                </Link>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:">First Name (የመጀመሪያ ስም)</label>
                                <input onChange={e=>setFirstName(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:">Last Name (የአባት ስም)</label>
                                <input onChange={e=>setLastName(e.target.value)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:">Address (አድራሻ)</label>
                                <input onChange={e=>setAddress(e.target.value)} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gullele" required/>
                            </div>  
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:">Car Owner's Phone Number (የመኪናው ባለቤት ስልክ ቁጥር)</label>
                                <input onChange={e=>setPhoneNumber(e.target.value)} type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required/>
                            </div>
                            <div>
                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:">Car Owner's Full Name (የመኪናው ባለቤት ሙሉ ስም) </label>
                                <input onChange={e=>setFullName(e.target.value)} type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required/>
                            </div>
                            <div>
                                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:">Vehicle Capacity (የመኪናው መጫን አቅም)</label>
                                <input onChange={e=>setVehicleCapacity(e.target.value)} type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:">Email Address (ኢሜይል)</label>
                            <input onChange={e=>setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                        </div> 
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:">School Address (የትምህርት ቤት አድራሻ)</label>
                            <input onChange={e=>setSchoolAddress(e.target.value)} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bole" required/>
                        </div> 
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:">Liscence Plate Number (ታርጋ ቁጥር)</label>
                            <input onChange={e=>setLiscence(e.target.value)} type="text" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A12345" maxLength={6} required/>
                        </div> 
                        <div className="mb-6">
                        
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:">ID image/ Driving licence (የመታወቂያ ወይም የመንጃ ፍቃድ ፎቶ)</label>
                    <input onChange={(e) => {setId(e.target.files[0])}}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

                        </div>

                        <div className="mb-6">
                        
                        <label htmlFor="libre" className="block mb-2 text-sm font-medium text-gray-900 dark:">Car Ownership Libre / Rental Contract Image (ሊብሬ ፎቶ)</label>
                    <input onChange={(e) => {setLibre(e.target.files[0])}}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

                        </div>

                        <div className="mb-6">
                        
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:">Car Owner's Image (የመኪናው ባለቤት ፎቶ)</label>
                    <input onChange={(e) => {setPhoto(e.target.files[0])}}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

                        </div>

                        <div className="mb-6">
                        
                        <label htmlFor="vehicle" className="block mb-2 text-sm font-medium text-gray-900 dark:">Vehicle Photo (የመኪናው ፎቶ)</label>
                    <input onChange={(e) => {setVehicle(e.target.files[0])}}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

                        </div>

                        <div className="mb-6">
                        
                        <label htmlFor="businessLiscence" className="block mb-2 text-sm font-medium text-gray-900 dark:">Business Liscence (የንግድ ፍቃድ)</label>
                    <input onChange={(e) => {setBusiness(e.target.files[0])}}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

                        </div>
                        <div className="flex items-start mb-3">
                            <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                        </div>
                            <Link to={"/sign-up-as-a-parent"}>
                              <p className='mb-3 text-blue-600 hover:underline'>ቤተሰብ ኖት? ልጅዎን ያስመዝግቡ</p>
                            </Link>

                        <button className='mb-5 py-3 px-6 inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-gray-200 text-orange-500 hover:border-orange-600 hover:text-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-orange-400 dark:hover:text-orange-500 dark:hover:border-orange-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' type='submit'>ተመዝገቡ</button>
                    </form>
        </div> ) :
        (
           <Submission />
          )}
    </div>
  )
}

export default Signup