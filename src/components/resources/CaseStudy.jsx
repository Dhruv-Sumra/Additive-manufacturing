import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudy = () => {
  const [caseStudy, setCaseStudy] = useState([]);

  useEffect(() => {
      setCaseStudy(data.caseStudy);
  }, []);

    const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots custom-dots",
    speed: 500,
    slidesToShow: 3,
    arrows:false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <div className="w-full h-auto mt-15 md:mt-30 py-5 relative">
      <div className="md:pl-10">
        <h2 className="text-center text-xl md:text-3xl font-bold">Case studies</h2>
      </div>

      
     <div className="px-5 md:px-10 mt-10">
            <Slider {...settings}>
        {caseStudy.map((item, index) => (
            <div key={index} className="bg-blue-50 min-h-90 shadow-md rounded-md relative flex flex-col items-center overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover " />
              
              <div className="p-4">
                <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
                <p className="text-black mt-2">{item.body}</p>
              </div>
            </div>
          ))}
          </Slider>
      </div>

      
    </div>
  );
};

export default CaseStudy;