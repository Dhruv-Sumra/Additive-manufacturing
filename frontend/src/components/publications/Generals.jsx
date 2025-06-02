import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../data/db.json";

const Generals = () => {
  const [generals, setGenerals] = useState([]);

  useEffect(() => {
    setGenerals(data.generals);
  }, []);

  return (
    <motion.div
      className="w-full h-auto mt-20 py-5"
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
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-center md:text-start text-xl md:text-3xl font-bold">Generals</h2>
      </motion.div>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {generals.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 h-auto md:pb-0 pb-10 md:h-100 shadow-md rounded-md relative flex flex-col items-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut"}}
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
              <p>
                <i className="fa-solid fa-calendar-days text-blue-600"></i> {item.date} - <b>{item.title}</b>
              </p>
              <p className="font-semibold mt-3">{item.subtitle}</p>
              <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
              <p className="text-black mt-2">{item.body}</p>
            </div>

            <a href="">
              <motion.button
                className="font-semibold absolute bottom-3 right-3 hover:text-blue-600 cursor-pointer text-blue-500"
                whileHover={{ scale: 1.05 }}
              >
                Download PDF
              </motion.button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Generals;