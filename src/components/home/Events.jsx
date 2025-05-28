import React, { useEffect, useState } from "react";
import data from "../../data/db.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mission = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data.Events);
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
    <div className="w-full h-auto mt-10 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">Featured Events</h2>
      </div>

      <div className="px-5 md:px-10">
        <Slider {...settings}>
          {events.map((item, index) => (
            <div
              key={index}
              className="relative pb-10 h-auto bg-blue-50 shadow-md rounded-md flex flex-col items-center overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover "
              />

              <div className="p-4">
                <div className="space-y-1">
                  <p>
                    <i className="fa-solid fa-calendar-days text-blue-600"></i>{" "}
                    {item.date}
                  </p>
                  <p className="font-semibold">
                    <i className="fa-solid fa-location-dot text-blue-600"></i>{" "}
                    {item.location}
                  </p>
                </div>

                <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
                <p className="text-black mt-2">{item.body}</p>
              </div>
              <a href="#">
                <button className="absolute bottom-3 right-3 font-semibold hover:text-blue-600 cursor-pointer text-blue-500 text-xl">
                  Learn more
                </button>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mission;
