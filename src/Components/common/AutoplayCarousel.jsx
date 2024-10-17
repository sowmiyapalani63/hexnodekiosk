import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AutoplayCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const logos = [
    { src: "/Assests/Images/costco.svg", alt: "Company 1" },
    { src: "/Assests/Images/saic.svg", alt: "Company 2" },
    { src: "/Assests/Images/Marrot.svg", alt: "Company 3" },
    { src: "/Assests/Images/Helton.svg", alt: "Company 4" },
    { src: "/Assests/Images/Merrik.svg", alt: "Company 5" },
    { src: "/Assests/Images/Lowe.svg", alt: "Company 6" },
    { src: "/Assests/Images/Group1.svg", alt: "Company 7" },
  ];

  return (
    <section className="pb-[60px] pt-[20px] sm:pl-[86.4px] lg:pb-[120px] md:pt-[20px] bg-[#F7F7F7]">
      <div className="w-[88%] sm:mx-auto md:max-w-[1300px] relative">
       
        <div className="w-[70px] sm:w-[100px] h-full absolute left-0 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]"></div>

 
        <div className="w-[70px] sm:w-[100px] h-full absolute  right-0 bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]"></div>

 
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="w-full inline-block">
              <figure className="block max-w-[115px] md:w-[181px] md:h-[71px] w-full">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[102px] max-h-[30px] md:w-[114px] md:h-[30px]"
                />
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AutoplayCarousel;
