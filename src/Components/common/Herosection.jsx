import React from 'react'
import DisplayRanks from './DisplayRanks'

const Herosection = () => {
  return (
    <>
   <section className='bg-[#020A19] pl-[86.4px] pr-[86.4px] pt-[120px]'>
    <div className='container mx-auto'>
    <div className='flex flex-col-reverse lg:flex-row bg-[#020A19] justify-between items-center'>
        <div className='flex flex-col pb-[20px]'>
            <span className='text-white font-bold text-[34px] sm:text-[42px] leading-[44px] sm:leading-[53px] max-w-[434px] xl:mb-[20px]'>
                Turn your devices into kiosks in a few minutes with Hexnode UEM
            </span>
            <span className='flex  flex-col sm:flex-row sm:flex-wrap sm:gap-[16px] sm:items-center gap-[8px]'>
                <div className='max-w-[280px] max-h-[53px]'>
                    <input
                        type="email"
                        placeholder="Your Work Email"
                        className="px-[10px] pt-[15.83px] pb-[15.84px] rounded-[3px] text-[#C6C6C6]  xl:w-[280px]  text-start max-h-[53px]"
                    />
                </div>
                <div>
                    <a href="#" className="bg-customred text-white px-[22px] py-[14px] rounded-[3px] text-[17px] leading-[24px]">
                        GET STARTED NOW!</a>
                </div>
            </span>
        </div>
        <div className='w-[260px] h-[160px] sm:max-w-[597px] sm:max-h-[586px]'>
            <img src='/Assests/Images/Heroimage.png' alt='' className='w-full h-full object-cover' />
        </div>
    </div>
    </div>
   
</section>

    <div>
        <DisplayRanks/>
    </div>
    </>
    
    
  )
}

export default Herosection
 