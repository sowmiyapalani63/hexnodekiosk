import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed navbar-transition z-10 w-[100%] sm:w-full pt-[8px] pb-[8px] transition-colors duration-500 ease-in-out ${isScrolled ? 'bg-white border-b border-grey-300 ' : 'bg-[#020A19]'}`}>
      <div className='w-[88%] mx-auto md:max-w-[1300px]'>
        <div className="flex justify-between items-center py-4 px-6 max-w-[1267.2px] max-h-[60px]">
          <div className="flex items-center">
            <a href="#" className="inline-block max-w-[121px] relative" aria-label="Hexnode">
              {isScrolled ?
                <img
                  src="/Assests/Images/logoLight.svg"
                  alt="Hexnode Logo"
                  className="h-8"
                /> :
                <img
                  src="/Assests/Images/logo.svg"
                  alt="Hexnode Logo"
                  className="h-8"
                />}
            </a>
          </div>
          <div className="flex items-center flex-row lg:flex-row">
          <a
              href="#" 
              className={` bg-customred text-white text-[15px] leading-[24px] font-medium pt-[10px] pb-[10px] pl-[26px] pr-[26px] hover:bg-rose-900 transition duration-300 ${isScrolled ? 'block opacity-100 transition-opacity duration-200 ease-linear' : 'opacity-1 '}`}
              id="try-btn" >
              14 Day Free Trial
            </a>
            <button className="md:hidden ml-4" onClick={() => setIsMenuOpen(prev => !prev)}>
              <span className={`hamburger-icon  ${isScrolled?"text-black":"text-white"}`}>☰</span> 
            </button>
          
            
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white bg-opacity-90 p-6 z-20 flex flex-col items-center">
              <button className="self-end" onClick={() => setIsMenuOpen(false)}>
              <MdClose className="text-black text-2xl" />
            </button>
            <a
              href="https://www.hexnode.com/mobile-device-management/sign-in/"
              className="bg-customred text-white text-[15px] font-medium py-2 px-4 mb-2"
              onClick={() => setIsMenuOpen(false)} 
            >
              14 Day Free Trial
            </a>
            <a
              href="https://www.hexnode.com/mobile-device-management/sign-in/"
              className="text-[15px] font-medium text-black"
              onClick={() => setIsMenuOpen(false)} 
            >
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
