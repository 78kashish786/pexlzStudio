import React from 'react'

const Services = () => {
  return (
    <div className='text-center pt-20'>
      <h1 className='text-3xl md:text-6xl font-bold ' ><mark className='highlight'>We Love</mark> <br/> doing..</h1>
      <h1 className='text-xl font-[300] text-gray-600 mt-3'>We help people making money with thier contents</h1>
      <div className='md:grid grid-cols-3 gap-10 md:w-[80vw] mx-auto mt-10 space-y-4 md:space-y-0'>
        <div className='relative flex flex-col justify-between items-center  rounded-xl bg-[#0d0d0d] p-5 '>
          <div className=' absolute top-[-25px] left-[-25px] p-6 rounded-full bg-yellow-400 text-black font-semibold'>Go</div>
            <h1 className='text-3xl font-semibold'>Youtube Management</h1>
            <img   src={require('../Assets/YouTube.png')} alt='images-pre'/>
            <p className='text-md font-[500] text-gray-600'>All encompassing suppport for strategy, post priduction, operations, analytics and growth</p>
        </div>
        <div className='relative flex flex-col justify-between items-center  rounded-xl bg-[#0d0d0d] p-5  '>
          <div className=' absolute top-[-25px] left-[-25px] p-6 rounded-full bg-yellow-400 text-black font-semibold'>Go</div>
            <h1 className='text-3xl font-semibold'>Video Editing</h1>
            <img   src={require('../Assets/VE.png')} alt='images-pre'/>

            <p className='text-md font-[500] text-gray-600'>All encompassing suppport for strategy, post priduction, operations, analytics and growth</p>
        </div>
        <div className='relative flex flex-col justify-between items-center  rounded-xl bg-[#0d0d0d] p-5  '>
          <div className=' absolute top-[-25px] left-[-25px] p-6 rounded-full bg-yellow-400 text-black font-semibold'>Go</div>
            <h1 className='text-3xl font-semibold'>Graphic Designing</h1>
            <img   src={require('../Assets/YouTube.png')} alt='images-pre'/>

            <p className='text-md font-[500] text-gray-600'>All encompassing suppport for strategy, post priduction, operations, analytics and growth</p>
        </div>
      </div>
    </div>
  )
}

export default Services
