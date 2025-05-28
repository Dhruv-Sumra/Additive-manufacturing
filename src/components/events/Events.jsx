import React, { useEffect, useState } from "react";
import data from "../../data/db.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "Tech", "Health", "Startup"];


  useEffect(() => {
    setEvents(data.upevents);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots custom-dots",
    speed: 500,
    slidesToShow: 3,
    arrows: false,
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
    <div className="w-full h-auto mt-10 py-10 ">
      <div className="text-center mb-6 ">
        <h2 className="text-4xl font-bold">Upcoming Events</h2>
      </div>

     <div className="flex justify-between md:justify-start w-full md:text-lg md:py-5 text-xs my-5 md:my-4 md:space-x-3 px-5 md:px-10">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-1 rounded-md transition cursor-pointer ${
            activeFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-blue-200 text-black hover:bg-blue-100"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>


      <div className="px-5 md:px-10 ">
        <Slider {...settings}>
          {events.map((item, index) => (
            <div
              key={index}
              className="relative pb-5 h-100 bg-blue-50 shadow-md rounded-md flex flex-col items-center overflow-hidden"
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
                </div>

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

export default Events;
