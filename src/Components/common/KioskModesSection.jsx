import React, { useState } from 'react';


const KioskModesSection = () => {
  
  const [activeTab, setActiveTab] = useState(0);


  const tabs = [
    { title: 'Single App Kiosk', content: 'Powerful Single-App Kiosk solutions for enhanced control', image: '/Assests/Images/modesImage.png' },
    { title: 'Multi-App Kiosk', content: 'Multi-App Kiosk solutions for versatile use', image: '/Assests/Images/modesImage.png' },
    { title: 'Web-based Kiosk', content: 'Web-based Kiosk for easy browsing', image: '/Assests/Images/modesImage.png' },
    { title: 'Digital Signages', content: 'Digital signage for enhanced displays', image: '/Assests/Images/modesImage.png' },
    { title: 'ASAM Kiosk', content: 'ASAM Kiosk for advanced features', image: '/Assests/Images/modesImage.png' }
  ];

  return (
    <div className="container  mx-auto ">
      <ul className="flex mb-6 flex-col sm:flex-row">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer p-2 md:w-[250px] md:h-[80px] border-r border-grey-100 text-[rgba(2,10,25,0.5)] py-[26px] text-center 
              transition-colors duration-1000  tetx-22px leading-[24px] font-semibold ${
              activeTab === index ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row bg-white p-[40px] md:max-w-[1269px] md:max-h-[443px] bg-[#F7F7F7]">
    
        <div className={`flex-1 transition-opacity duration-100 ease-in-out transform ${activeTab === 0 ? 'opacity-100 translate-x-0' : 'opacity-1 -translate-x-4'}`}>
          <h2 className="text-[#020A19] font-bold text-[20px] leading-[26px] antialiased sm:text-[28px] max-w-[670px] sm:leading-[40px] pb-[15px] lg:pb-[40px] max-w-[670px] max-h-[120px]">{tabs[activeTab].content}</h2>
          
          <ul className="mt-4 space-y-[25px] ">
            <li className='flex flex-row'><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'>Provision the devices to run specialized applications </p></li>
            <li className='flex flex-row'><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'> Customize the device settings for specific use cases</p></li>
            <li className='flex flex-row'><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'>Empower administrators with full control</p></li>
            <li className='flex flex-row'><img src='/Assests/Images/tickicon.svg'/> <p className='text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]'>Use Hexnodes Advanced Kiosk settings for additional restrictions or expanded
            device functionalities while in kiosk mode.</p></li>
           
          </ul>
        </div>

     
        <div className={`flex-1  transition-opacity duration-500 ease-in-out transform ${activeTab === 0 ? 'opacity-100 translate-x-0' : 'opacity-1 translate-x-4'}`}>
          <img src={tabs[activeTab].image} alt={tabs[activeTab].title} className="w-[466px] h[353px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default KioskModesSection;
