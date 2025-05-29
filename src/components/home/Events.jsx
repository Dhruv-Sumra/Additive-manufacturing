import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/db.json";

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
    <motion.div
      className="w-full h-auto mt-10 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Section Heading */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">Featured Events</h2>
      </motion.div>

      {/* Events Slider */}
      <div className="px-5 md:px-10">
        <Slider {...settings}>
          {events.map((item, index) => (
            <motion.div
              key={index}
              className="relative pb-10 h-auto bg-blue-50 shadow-md rounded-md flex flex-col items-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                whileHover={{ scale: 1.02  }}
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
                <motion.button
                  className="absolute bottom-3 right-3 font-semibold hover:text-blue-600 cursor-pointer text-blue-500 text-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn more
                </motion.button>
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Mission;