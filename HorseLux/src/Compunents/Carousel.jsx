import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Style/Carousel.css'
import img from '../Images/Vector.png'
const Carousel = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, // Add navigation dots if you want
  };

  return (
   <div className='p-5'>
     <div className="carousel-container">
      <Slider {...settings}>
        {/* Components to be displayed */}
        <div className='carousel-item bg-[#D2AC47] rounded-xl p-5'>
        <div className='bg-white p-2 w-14 rounded-full h-14 flex items-center justify-center'>
            <img src={img} className='w-8 h-8'></img>
        </div>
            <h1 className='text-[24px] py-4 font-[700] text-white '>Horse Management</h1>
            <p className='text-white text-[16px] font-[400] font-[Quicksand] mt-3'>Log medical conditions, medications, rides, farrier or veterinary activities and much more</p>
            <button type='button' className='text-white bg-[#000032] px-5 py-2 rounded-full mt-10'>Explore</button>
        </div>
        <div className='bg-white carousel-item rounded-xl border shadow-sm p-5'>
        <div className='bg-white p-2 w-14 rounded-full h-14 flex items-center justify-center'>
            <img src={img} className='w-8 h-8'></img>
        </div>
            <h1 className='text-[24px] py-4 font-[700] text-[#223F4C] '>Grooming your horse</h1>
            <p className='text-[#223F4C] text-[16px] font-[400] font-[Quicksand] mt-3 leading-[24px]'>You need to purchase grooming items to groom your horse. Grooming is an integral part of horse care. </p>
            <button type='button' className='text-white bg-[#000032] px-5 py-2 rounded-full mt-10'>Explore</button>
        </div>
        <div>fsfsdfdfsd</div>
        {/* <div>sdfsd</div>
        <div>sfsdf</div>
        <div>fsfsdfdfsd</div> */}
        {/* Add more components here */}
      </Slider>
    </div>
   </div>
  );
};

// Replace Component1, Component2, Component3, etc. with the actual components you want to display in the carousel.

export default Carousel;
