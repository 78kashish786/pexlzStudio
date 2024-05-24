import gsap from 'gsap';
import React, { useEffect } from 'react'
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css';
import video from '../Assets/reel.mp4'
const HeroSection = () => {

  return (
    <div className='block md:grid  grid-cols-2  md:h-[91vh] w-full md:pl-10'>
      <div className='flex pl-5 mt-10 flex-col items-start justify-center md:text-3xl text-xl md:pr-5 w-[70%] p- mb-10 md:mb-0' >
        <h1 className= ' md:text-xl md:mb-3'>we are_ _</h1>
        <h1 className='md:text-6xl text-8xl  font-bold mb-10'>pexlz</h1>
        <h1>a friendly bunch of thinkers, designers & techies constantly delivering good stuff. We don’t do boring. We create products that make people say damn!</h1>
      </div>
      <div className=' object-cover'>
      <video class="h-full w-full md:rounded-tl-3xl md:rounded-bl-3xl object-cover " loop  autoPlay muted>
      <source className='h-[100vh] md:h-[92vh] w-[100%]' src={require("../Assets/reel.mp4")} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
       
      </div>
    </div>
  )
}

export default HeroSection
