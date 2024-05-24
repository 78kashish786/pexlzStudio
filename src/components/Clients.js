import React from 'react'
import ClientSlider from './ClientSlider';
const Clients = () => {
  return (
    <div className='text-center mt-20'>
      <h1 className='text-3xl md:text-6xl font-bold ' > We've Worked with some <br/>cool People</h1>
      <h1 className='text-xl font-[300] text-gray-600 mt-3'>We help people making money with thier contents</h1>
       <div className='my-10'>
       <ClientSlider/>
      </div>
      
    </div>
  )
}

export default Clients
