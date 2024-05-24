import React from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
const MainFooter = () => {
  return (
   <>
    <div className='md:grid grid-cols-2 bg-[#0d0d0d] md:px-24 px-5 py-10'>
      <div>
      <h1 className='md:text-8xl text-6xl  font-bold mb-2'>pexlz</h1>
      <h1 className='text-gray-600'>A Content Managment Company</h1>

      </div>
      <ul className='flex justify-end py-10 px-5 text-2xl gap-5'>
        <li className='p-3 border rounded-full '><RiInstagramFill/></li>
        <li className='p-3 border rounded-full '><FaDribbble/></li>
        <li className='p-3 border rounded-full '><FaLinkedin/></li>
      </ul>
    </div>
    <div className='bg-[#0d0d0d] text-sm font-[400] text-gray-600 px-10 py-1 border-t border-gray-900'>
        <h6 className='text-center'>pexlzStudio@2024 All Rights Reserved</h6>
    </div>
   </>
  )
}

export default MainFooter
