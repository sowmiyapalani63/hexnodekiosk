import React from 'react';
import Footer from './Footer';

const ContactSection = () => {
  return (
    <>
      <section className='bg-[#020A19] pt-[120px] px-[24px] pb-[50px] sm:pt-[199.19px] sm:px-[86.4px] sm:pb-[79.22px]'> 
        <div className='w-[88%] mx-auto md:max-w-[1300px]'>
          <div className='w-full text-center max-w-[1000px] mx-auto'>
            <h3 className="text-[30px] text-[#ffff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
              Sign up and try Hexnode free for 14 days!
            </h3>
          </div>
          <div className='flex flex-col sm:flex-row sm:flex-wrap sm:gap-[16px] items-center justify-center gap-[13px] text-center'>
            <div className='max-w-[280px]'>
              <input
                type="email"
                placeholder="Your Work Email"
                className="px-[10px] pt-[15.83px] pb-[15.84px] rounded-[3px] text-[#C6C6C6] xl:w-[280px] text-start max-h-[53px]"
              />
            </div>
            <div>
              <a href="#" className="bg-customred text-white px-[22px] py-[14px] rounded-[3px] text-[17px] leading-[24px] whitespace-nowrap">
                GET STARTED NOW!
              </a>
            </div>
          </div>
          <div className="pt-[10px] relative">
            <span className="text-[17px] leading-[24px] text-[#fff] font-extralight text-center block absolute top-0 left-0 w-full"></span>
            <p className="text-[17px] leading-[24px] text-center text-[#556575] font-medium m-[0px] pt-[10px]">
              No credit cards required.
              <a 
  className="text-[17px] leading-[24px] text-[#dd0735] font-medium whitespace-nowrap inline-block transition-all duration-[0.3s] ease-in-out pr-[20px] pb-[0px] pl-[5px] relative after:w-[6px] after:h-[10px] after:absolute after:right-[5px] after:top-[9px] after:bg-[url('https://static.hexnode.com/img/home_page/images/icons/arrow-right.svg')] after:bg-no-repeat after:transform after:transition-transform after:duration-2000 hover:after:translate-x-[0.3rem]" 
  role="link" 
  href="https://www.hexnode.com/mobile-device-management/request-demo/"
>
  Request a demo
</a>
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ContactSection;
