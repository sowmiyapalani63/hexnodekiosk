import React from 'react';


const PlatformsSection = () => {
  const platforms = [
    { src: '/Assests/Images/android icon.svg', alt: 'Android' },
    { src: '/Assests/Images/Windows.svg', alt: 'Windows' },
    { src: '/Assests/Images/ios.svg', alt: 'iOS' },
    { src: '/Assests/Images/Andriodtv.svg', alt: 'Android TV' },
    { src: '/Assests/Images/appletv.svg', alt: 'Apple TV' },
    { src: 'https://static.hexnode.com/v2/assets/img/ads-pages/platform/amazon-fire.png', alt: 'Amazon Fire' }
  ];

  return (
    <section className="pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px] flex justify-center items-center text-center flex-col">
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <h2 className="text-center mb-[40px] text-[#020a19] text-[32px] leading-[40px] antialiased font-[700] md:mb-[60px] sm:text-[40px] sm:leading-[1.3]">
          Platforms supported
        </h2>
        <div className="flex items-center flex-wrap">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="block shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc(100%_/_6)] rounded-[10px] mb-[25px] sm:mb-[15px] px-[12px]"
            >
              <div className="flex items-center justify-center mx-auto max-w-[150px] h-[60px] sm:max-w-[190px] sm:h-[72px] rounded-[10px] transform transition-transform duration-2000 hover:translate-y-[-0.3rem]">
                <img
                  src={platform.src}
                  alt={platform.alt}
                  className="block w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
