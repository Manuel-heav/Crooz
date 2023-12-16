import React, { useState } from 'react'
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../../util/Firebase';

const SignIn = () => {

    const [studentsName, setStudentsName] = useState("")
    const [studentsLastName, setStudentsLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [grade, setGrade] = useState(0)
    const [email, setEmail] = useState("")
    const [schoolAddress, setSchoolAddress] = useState("")
    const [studentPhoto, setStudentPhoto] = useState(null)
    const [studentId, setStudentId] = useState(null)
    const [parentId, setParentId] = useState(null)
    const [progress, setProgress] = useState(0)


    const handleUpload = () => {
        const imageInputs = [studentPhoto, studentId, parentId];
      
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
            const [studentPhotoUrl, studentIdUrl, parentIdUrl] = urls;
      
            addDoc(collection(db, 'parentsForm'), {
                studentsName: studentsName,
                studentsLastName: studentsLastName,
                address: address,
                phoneNumber: phoneNumber,
                grade: grade,
                email: email,
                schoolAddress: schoolAddress,
                studentPhotoUrl: studentPhotoUrl,
                studentIdUrl: studentIdUrl,
                parentIdUrl: parentIdUrl,
              });
            })
          .catch((error) => {
            console.error("Error uploading files:", error);
            alert("Error uploading files. Please try again.");
          });
      };
  return (
    <div className='lg:pt-[20px] px-10 lg:px-80 bg-[#ece2de]'>
     <h1 className='text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600'>Parent Form Registration</h1>
     <p className='text-center text-sm mb-10 mt-2'>(We will get back to you shortly)</p> 
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:">Student's First Name (የተማሪው የመጀመሪያ ስም)</label>
            <input onChange={e=>setStudentsName(e.target.value)}  type="text" id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:">Student's Last Name (የተማሪው የመጨረሻ ስም)</label>
            <input onChange={e=>setStudentsLastName(e.target.value)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:">Address (አድራሻ)</label>
            <input onChange={e=>setAddress(e.target.value)} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gullele" required/>
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:">Parent's Phone Number (የቤተሰብ ስልክ)</label>
            <input onChange={e=>setPhoneNumber(e.target.value)} type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required/>
        </div>
        <div>
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:">Grade (የክፍል ደረጃ)</label>
            <input onChange={e=>setGrade(e.target.value)} type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:">Parents' Email Address (ኢሜይል) (Optional)</label>
        <input onChange={e=>setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:">School Address (የትምህርት ቤት አድራሻ)</label>
        <input onChange={e=>setSchoolAddress(e.target.value)} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bole" required/>
    </div> 
    
    <div className="mb-6">
      
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:">Passport Sized Photo(student) (የተማሪ ፎቶ)</label>
<input onChange={(e) => {setStudentPhoto(e.target.files[0])}} className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

    </div>

    <div className="mb-6">
      
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:">Student ID photo (የተማሪ መታወቂያ ፎቶ)</label>
<input onChange={(e) => {setStudentId(e.target.files[0])}}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

    </div>

    <div className="mb-6">
      
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:">Parent Government ID (የቤተሰብ መታወቂያ ፎቶ)</label>
<input onChange={(e) => {setParentId(e.target.files[0])}} className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2.5" aria-describedby="file_input_help" id="file_input" type="file"required/>

    </div>
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>

    <button onClick={handleUpload} className='px-8 py-3 rounded-md bg-[#DB7C26] text-white font-bold bg-gradient-to-br from-orange-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800 mb-5' type='button'>ተመዝገቡ</button>
</form>
    </div>
  )
}

export default SignIn