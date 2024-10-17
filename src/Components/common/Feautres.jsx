import React from 'react';
import KioskModesSection from './KioskModesSection';

const Feautres = () => {
  return (
    <section className="py-[60px] flex justify-center items-center  flex-col lg:py-[120px] md:px-[86.4px]">
      <div className="mx-auto max-w-full w-[88%]">
        <h2 className="text-center max-w-[900px] mx-auto text-[#020a19] text-[32px] leading-[40px] antialiased font-[700] sm:text-[40px] sm:leading-[1.3]">
          Specific kiosk modes for unique use cases
        </h2>
      </div>
      <div className="pt-[40px] sm:pt-[60px]">
        <KioskModesSection /> 
      </div>
    </section>
  );
};

export default Feautres;
