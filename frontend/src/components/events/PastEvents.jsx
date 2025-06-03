import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PastEvents = () => {
   const [events, setEvents] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
       const fetchEventsData = async () => {
         try {
           const response = await fetch("http://localhost:4000/api/v1/db/past-events");
           if (!response.ok) {
             throw new Error("Failed to fetch past events");
           }
           const data = await response.json();
           setEvents(data.data);
         } catch (err) {
           setError(err.message);
         } finally {
           setLoading(false);
         }
       };
   
       fetchEventsData();
     }, []);

     if (loading) {
       return (
         <div className="w-full h-auto mt-10 py-10 flex justify-center items-center">
           <p>Loading Past events...</p>
         </div>
       );
     }
   
     if (error) {
       return (
         <div className="w-full h-auto mt-10 py-10 flex justify-center items-center">
           <p className="text-red-500">Error: {error}</p>
         </div>
       );
     }

  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots custom-dots",
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
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
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold">Past Events</h2>
      </motion.div>

      <motion.div
        className="text-center text-sm md:text-md mx-auto w-3/4 my-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <p>
          At ISAMC, every event is a stepping stone toward scientific progress and community growth. From groundbreaking research symposiums to thought-provoking discussions, our past events have fostered collaboration, discovery, and knowledge-sharing among visionary minds.
        </p>
      </motion.div>

      <div className="px-5 md:px-10">
        <Slider {...settings}>
          {[...events].reverse().map((item, index) => (
            <motion.div
              key={item.id || index}
              className="relative pb-5 h-105 bg-blue-50 shadow-md rounded-md flex flex-col items-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
              />

              <div className="p-4">
                <div className="space-y-1">
                  <p>
                    <i className="fa-solid fa-calendar-days text-blue-600"></i>{" "}
                    {item.date.day + " " + item.date.month} 
                  </p>
                </div>
                <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
                <p className="text-black mt-2">{item.body}</p>
              </div>

              <a href="#">
                <motion.button
                  className="blue_btn absolute bottom-5 left-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Download PDF
                </motion.button>
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default PastEvents;