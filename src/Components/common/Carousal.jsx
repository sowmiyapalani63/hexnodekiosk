import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: '/Assests/Images/testimonial1.png', 
      text: 'Hexnode is of great value. Works great with Android and iOS!".',
      name: 'Justin Modrak',
      position: 'Technology Coordinator',
      company: 'East Troy Community School District'

    },
    {
      image: '/Assests/Images/testimonial1.png',
      text: 'Most complete MDM solution I found, and I tested many of them, including major names',
      name: 'Dalibor Kruljac',
      company: 'KAMELEYA LTD'
    },
    {
      image: '/Assests/Images/testimonial1.png',
      text: 'It seemed to be in-line with everything we were looking at.',
      name: 'Chris Robinson',
      company: 'Executive Account Manager, NCS'
    },
  ];

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
    <section className='bg-[#F7F7F7]'>
    <div className="relative w-full max-w-[960px] mx-auto py-[60px]">
  <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">
    Why should you choose Hexnode?
  </h2>

  <div className="relative bg-white flex flex-col md:flex-row md:items-center space-x-4 pt-[40px]">

    <div className="flex-shrink-0 mx-auto">
      <img
        src={testimonials[currentIndex].image}
        alt={testimonials[currentIndex].name}
        className=" h-auto object-cover rounded-lg" 
      />
    </div>

    <div className="flex flex-col items-center md:items-start">
      <h4 className="md:pl-[65px] md:pr-[55px] md:mb-[20px] text-lg sm:text-xl md:text-2xl leading-snug text-[#020a19] font-bold text-center md:text-left">
        "{testimonials[currentIndex].text}"
      </h4>
    <span className='md:pl-[65px] md:pr-[55px]'>
    <p className="text-center md:text-left text-base sm:text-lg font-bold text-[#020a19] ">
        {testimonials[currentIndex].name}
      </p>
      
  <p className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
    {testimonials[currentIndex].position}
  </p>
  
  <p className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
    {testimonials[currentIndex].company}
  </p>

    </span>
      
    </div>
  </div>

  {testimonials.length > 1 && (
    <div className="lg:absolute absolute bottom-[-40px] text-center lg:top-[68%] transform -translate-y-1/2 w-full ">
      <button
        className={`py-[19.95px] px-[23.5px] bg-white rounded-[12px] lg:absolute lg:left-[-103px] ${currentIndex === 0 ? 'cursor-not-allowed text-grey-200 opacity-20' : 'hover:bg-gray-300'}`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
        aria-label="Previous testimonial"
      >
        <FaChevronLeft size={30} className='w-[11px]' />
      </button>

      <button
        className={`py-[19.95px] px-[23.5px] bg-white rounded-[4px] lg:absolute lg:right-[-90px] ${currentIndex === testimonials.length - 1 ? 'cursor-not-allowed text-grey-200 opacity-20' : 'hover:bg-gray-300'}`}
        onClick={nextSlide}
        disabled={currentIndex === testimonials.length - 1}
        aria-label="Next testimonial"
      >
        <FaChevronRight size={30} className='w-[11px]'/>
      </button>
    </div>
  )}
</div>
    </section>


    </>
    
  );
}

export default Carousal;
