import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/db.json";

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
      className="w-full h-auto mt-15 md:mt-30 py-5 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="md:pl-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-center text-xl md:text-3xl font-bold">Case studies</h2>
      </motion.div>

      <div className="px-5 md:px-10 mt-10">
        <Slider {...settings}>
          {caseStudy.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 min-h-90 shadow-md rounded-md relative flex flex-col items-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut"}}
                whileHover={{ scale: 1.01 }}
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
                <p className="text-black mt-2">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default CaseStudy;