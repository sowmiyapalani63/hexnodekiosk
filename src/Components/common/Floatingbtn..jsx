import React, { useState } from 'react';

const FloatingButtonWithPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>

      <button
        onClick={togglePopup}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-[1rem] rounded-full shadow-lg z-[50]"
      >
        {isPopupVisible ? (
          <img src="/Assests/Images/dropdownarrow.svg" alt="close" />
        ) : (
          <img src="/Assests/Images/MessageIcon.svg" alt="open" />
        )}
      </button>


      {isPopupVisible && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="relative">
      
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

           
            <h2 className="text-lg font-bold text-blue-500 mb-2">
              How can we help you?
            </h2>
            <p className="text-gray-600 mb-4">
              We're here to answer your questions! Send us a message.
            </p>

          
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type your message here..."
              rows="4"
            ></textarea>

            <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold">
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtonWithPopup;
