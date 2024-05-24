import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaDribbble } from "react-icons/fa";
const MainHeader = () => {
  return (
    <div className=' sticky top-0 flex justify-between items-center py-4 px-5 bg-black z-10'>
      <h1 className='text-2xl  font-bold'>pexlz</h1>
      <ul className='hidden md:flex gap-10 items-center font-[550] text-[14px]'>
        <li className='lowercase'>pexlz daily</li>
        <li>career</li>
        <li>contact</li>
        <li>portfolio</li>
        {/* <li><FaLinkedin color={'white'}/></li> */}
      </ul>
    </div>
  )
}

export default MainHeader
