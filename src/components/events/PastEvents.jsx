import React, { useEffect, useState } from "react";
import data from "../../data/db.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PastEvents = () => {
  const [events, setEvents] = useState([]);

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
        <h2 className="text-4xl font-bold">Past Events</h2>
      </div>

      <div className="text-center text-sm md:text-md mx-auto w-3/4 my-5">
        <p>At ISAMC, every event is a stepping stone toward scientific progress and community growth. From groundbreaking research symposiums to thought-provoking discussions, our past events have fostered collaboration, discovery, and knowledge-sharing among visionary minds.</p>
      </div>


      <div className="px-5 md:px-10 ">
        <Slider {...settings}>
          {events.slice().reverse().map((item, index) => (
            <div
              key={index}
              className="relative pb-5 h-105 bg-blue-50 shadow-md rounded-md flex flex-col items-center overflow-hidden"
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

              <a href="#">
                <button className="blue_btn absolute bottom-5 left-4">Download PDF</button>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PastEvents;
