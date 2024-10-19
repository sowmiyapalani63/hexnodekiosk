import React, { useState, useEffect, useRef } from 'react';

const features = [
    { 
      id: 1, 
      heading: 'Effortless kiosk deployment & management', 
      text: 'Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.', 
      image: '/Assests/Images/appManagement.png',
      spanText: 'Zero touch kiosk',
      spanPosition: {right: '-5px', top:'20px '}
    },
    { 
      id: 2, 
      heading: 'Customized interface for brand visibility', 
      text: 'Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.', 
      image: '/Assests/Images/appManagement.png',
      spanText: 'Brand visibility',
      spanPosition: {     right: '-5px', bottom: '33px' }
    },
    { 
      id: 3, 
      heading: 'What more can you do with Hexnode kiosk?', 
      text: 'Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.', 
      image: '/Assests/Images/appManagement.png',
      spanText: 'App management',
      spanPosition: {     right: '-5px',top:'20px ' }
    },
    { 
      id: 4, 
      heading: 'Secure and update your app ecosystem', 
      text: 'Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.', 
      image: '/Assests/Images/appManagement.png',
      spanText: 'Ecosystem security',
      spanPosition: { right: '-5px', bottom: '33px' }
    },
    { 
      id: 5, 
      heading: 'Provide an easy-to-use interface for end-users', 
      text: 'Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.', 
      image: '/Assests/Images/appManagement.png',
      spanText: 'User-friendly interface',
      spanPosition: { right: '-5px',top:'20px ' }
    },
];

const KioskFeatures = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleFeatureClick = (index) => {
    setSelectedFeatureIndex(index);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`container md:pt-[120px] mx-auto md:pb-[120px] lg:pl-[86.4px] ${visible ? 'animate-slide-in' : 'animate-slide-in'}`}>
      <div className="mx-auto max-w-full w-[88%]">
        <h2 className="text-center max-w-[900px] mx-auto text-[#020a19] text-[32px] leading-[40px] antialiased font-[700] sm:text-[40px] sm:leading-[1.3]">
        What additional possibilities does the Kiosk mode offer?
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center md:mt-[40px]  w-[88%] gap-[2px] pt-[20px] md:pt-0">
      
        <div className="relative max-w-[518.67px] max-h-[544.54px] transition-all duration-300 ease-out hover:bg-blue-500">
          {selectedFeatureIndex !== null && (
            <>
              <img 
                src={features[selectedFeatureIndex].image} 
                alt={`Image for ${features[selectedFeatureIndex].heading}`} 
                className="object-cover sm:max-w-[518.67px] sm:max-h-[544.54px]" 
              />
              <span className="absolute bg-[white/90]  text-green-500 text-2xl px-[30.6px]  py-[15.67px] bg-white border border-[#F2F2F2] rounded-[8px] shadow backdrop-blur-[24px] transform transition-transform duration-2000 hover:translate-y-[-0.9rem] cursor-pointer" 
              style={{
                top: features[selectedFeatureIndex].spanPosition.top,
                left: features[selectedFeatureIndex].spanPosition.left,
                bottom: features[selectedFeatureIndex].spanPosition.bottom,
                right: features[selectedFeatureIndex].spanPosition.right
              }}> <span className='p-[2px] rounded-full bg-[#DEF8DE] '>✓</span><span className='text-[18px] text-black leading-[26px] font-semibold opacity-[1px] '>{features[selectedFeatureIndex].spanText}</span></span>
            </>
          )}
        </div>

        <div className="flex-1 ml-4">
          <ul className="list-none md:gap-[20px]">
            {features.map((feature, index) => (
              <li key={feature.id} className="mb-4 cursor-pointer">
                <h2 
                  className="text-[#050607] cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] text-left" 
                  onClick={() => handleFeatureClick(index)}>
                  {feature.heading}
                </h2>
                {selectedFeatureIndex === index && (
                  <div className='transition-all duration-[1000s] ease-out opacity overflow-hidden    active:opacity-100 active:max-h-[1000px]'>
                    <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[20px]">{feature.text}</p>
                    <a rel="noreferrer" target="_blank" className="group inline-flex items-center justify-start mt-2.5"
                      href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                      <span className="uppercase text-lg leading-[23px] text-[#DD0735] font-semibold flex flex-row gap-2 items-center">
                        Try for free  <img src='/Assests/Images/arrow.svg' alt='' className='w-[6.7px] h-[11.7px] transition-transform duration-300 ease-in-out group-hover:translate-x-1'/>
                      </span>
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KioskFeatures;
