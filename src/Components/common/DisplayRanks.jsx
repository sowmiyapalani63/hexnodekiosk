import React from 'react'

const DisplayRanks = () => {
  return (
    <div className="bg-[#1A1C2B] py-[60px] text-center items-center text-white md:py-[30px]">
        <div className='w-[88%] max-w-[1300px] mx-auto'>
        <div className="flex flex-col md:flex-row justify-around items-center gap-[30px]">
  <div className="flex flex-col  items-center md:items-baseline border-b border-gray-500 md:border-b-0 md:border-r md:border-gray-500 md:pr-[45px] md:pl-[45px]">
    <a target='_blank' href='#'>
    <div class="flex mb-[15px]">
    <div class="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
    <img
          src="/Assests/Images/IDCimage.png"
          alt="IDC"
          className=" mb-[15px]w-[100px]"
        />
        </div>
        </div>
        <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
          Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
        </p>
    </a>
        
      </div>
      
       <div className="text-center border-b border-gray-500 md:border-b-0 md:border-r md:border-gray-500 md:pr-[45px] md:pl-[45px] ">
       <a target='_blank' href='#'>
       <div class="flex mb-[15px]">
        <div class="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
        <img
          src="/Assests/Images/Gartnerimage.png"
          alt="Gartner"
          className=" w-[100px] "
        />
            </div>
       </div>
      
        <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
          Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.
        </p>
       </a>
        
      </div>

       <div className="text-center 
      md:pr-[45px] md:pl-[45px]">
         <a target='_blank' href='#'>
         <div class="flex mb-[15px]">
         <div class="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
         <img
          src="/Assests/Images/Forresterimage.png"
          alt="Forrester"
          className=" w-[100px] "
        />
        </div>
        </div>
        <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
          Forrester includes Hexnode as a notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
        </p>
         </a>
        
      </div>
    </div>
        </div>
   
  </div>
  )
}

export default DisplayRanks