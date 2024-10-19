import React, { useState } from 'react';
import './KioskModesSection.css';

const KioskModesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);

  const tabs = [
    { title: 'Single App Kiosk', content: 'Powerful Single-App Kiosk solutions for enhanced control', image: '/Assests/Images/modesImage.png' },
    { title: 'Multi-App Kiosk', content: 'Multi-App Kiosk solutions for versatile use', image: '/Assests/Images/modesImage.png' },
    { title: 'Web-based Kiosk', content: 'Web-based Kiosk for easy browsing', image: '/Assests/Images/modesImage.png' },
    { title: 'Digital Signages', content: 'Digital signage for enhanced displays', image: '/Assests/Images/modesImage.png' },
    { title: 'ASAM Kiosk', content: 'ASAM Kiosk for advanced features', image: '/Assests/Images/modesImage.png' }
  ];

  const handleTabClick = (index) => {
    setAnimate(false);  
    setTimeout(() => {
      setActiveTab(index);
      setAnimate(true);  
    }, 50);  
  };

  return (
    <div className="container mx-auto ">
    <div className="w-full relative border-[1px] border-solid border-[#f7f7f7] rounded-t-[4px] overflow-hidden overflow-x-auto scroll-smooth">
        <ul className="flex flex-col sm:flex-row justify-between items-center scroll-smooth whitespace-nowrap cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={`flex-1 min-h-[80px] w-full px-[30px] relative text-center whitespace-normal transition-all duration-500 ease-in-out 
                before:content-[''] before:absolute before:left-0 before:w-[2px] before:h-full before:z-1 before:bg-[#f7f7f7] 
                ${activeTab === index ? 'bg-black text-white' : 'bg-white text-black'} 
                ${animate && activeTab === index ? 'transition-colors' : ''}`}  // Apply animation only to active tab
            >
              <p className="p-[26px_0] max-w-[240px] h-[80px] w-full flex justify-center items-center text-[22px] whitespace-nowrap font-[600] leading-[24px] relative z-3">
                {tab.title}
              </p>
            </li>
          ))}
        </ul>
      </div>


      <div className="flex flex-col-reverse md:flex-row bg-white p-[40px] md:max-w-[1269px] md:max-h-[443px] bg-[#F7F7F7]">
        <div className={`flex-1 lg:pl-[40px] ${animate ? 'slide-in-left' : ''}`}>
          <h2 className="text-[#020A19] font-bold text-[20px] leading-[26px] antialiased sm:text-[28px] max-w-[670px] sm:leading-[40px] pb-[15px] lg:pb-[40px] max-w-[670px] max-h-[120px]">
            {tabs[activeTab].content}
          </h2>
          <ul className="mt-4 space-y-[25px]">
            <li className="flex flex-row"><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'>Provision the devices to run specialized applications </p></li>
            <li className="flex flex-row"><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'> Customize the device settings for specific use cases</p></li>
            <li className="flex flex-row"><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'>Empower administrators with full control</p></li>
            <li className="flex flex-row"><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'>Use Hexnodes Advanced Kiosk settings for additional restrictions or expanded
              device functionalities while in kiosk mode.</p></li>
          </ul>
        </div>

        <div className={`flex-1 ${animate ? 'slide-in-left' : ''}`}>
          <img src={tabs[activeTab].image} alt={tabs[activeTab].title} className="w-[466px] h[353px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default KioskModesSection;
