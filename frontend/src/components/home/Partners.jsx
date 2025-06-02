import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../data/db.json";

const Publications = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(data.partners);
  }, []);

  const scrolleAnim = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="w-full h-auto mt-20 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold">Partners</h2>
      </motion.div>


      <div className="overflow-hidden w-full mt-6">
        <motion.div
          className="flex px-10 space-x-6"
          variants={scrolleAnim}
          animate="animate"
        >
          {partners.concat(partners).map((item, index) => (
            <motion.div
              key={index}
              className="w-40 md:w-60 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.img} alt={item.title} className="w-full object-cover" />
              <h2 className="text-center text-lg md:text-xl">{item.title}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <a href="">
          <motion.button
            className="text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-3 md:px-5 rounded-lg tracking-wide md:text-2xl"
            whileHover={{ scale: 1.05 }}
          >
            Become a Partner
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Publications;