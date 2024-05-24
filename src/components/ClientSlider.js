import React from "react";
import Slider from "react-slick";
import { PiYoutubeLogoFill } from "react-icons/pi";

function ClientSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container z-0">
      <Slider {...settings}>
      <div className='flex justify-between  h-[50vh] border-gray-600 bg-[#0d0d0d] rounded-md items-center'>
          <img className=" w-full h-full object-cover" src={require('../Assets/person2.jpg')} alt='person'/>
        </div>
        
        <div className='flex justify-between  h-[50vh] border-gray-600 bg-[#0d0d0d] rounded-md items-center '>
          <img className="w-full h-full object-cover" src={require('../Assets/hel.webp')} alt='person'/>
        </div>
        <div className='flex justify-between  h-[50vh] border-gray-600 bg-[#0d0d0d] rounded-md items-center '>
          <img className="w-full h-full object-cover" src={require('../Assets/person2.jpg')} alt='person'/>
        </div>
        <div className='flex justify-between  h-[50vh] border-gray-600 bg-[#0d0d0d] rounded-md items-center '>
          <img className="w-full h-full object-cover" src={require('../Assets/person2.jpg')} alt='person'/>
        </div>

     
      </Slider>
    </div>
  );
}

export default ClientSlider;
