import React from 'react'
import { BiArrowFromLeft } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
const ContactSection = () => {
  return (
    <div className=' bg-gradient-to-bl from-amber-200 to-amber-300  py-5 px-4 text-gray-900 px-24  mt-10'>
        <div className='grid grid-cols-2 justify-end items-end'>
          <div>
            <h1 className='text-7xl font-bold '>Lets Get In Touch</h1>
          </div>
          <div className='text-sm flex gap-5 items-center'>
            <div className='flex items-center -gap-[20px] '>
              <hr className='border-2 border-gray-800 w-[150px]'/><IoIosArrowForward size={30}/>
            </div>
            <p className='text-md font-semibold'>Great!,We are axcited to hear form you and<br/>
            lets Start Something Special togehter or<br/> Call us for an Inquiry</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
        <div>
          <h1>Hello</h1>
        </div>
        <div>

        </div>
        </div>
    </div>
  )
}
export default ContactSection

// bg-gradient-to-bl from-amber-200 to-amber-300 