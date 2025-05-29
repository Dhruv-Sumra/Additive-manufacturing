import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../data/db.json";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    setFaqs(data.faqs);
  }, []);

  return (
    <motion.div
      className="w-4/5 h-auto mt-20 px-5 md:px-0 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="w-full md:max-w-3/4 md:px-10 mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold md:px-5 mb-10">FAQs</h2>
      </motion.div>

      {faqs.map((item, index) => (
        <motion.div
          key={index}
          className="mb-5 md:ml-15 rounded-md shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
        >
          <motion.button
            className="w-full flex justify-between text-start cursor-pointer text-sm md:text-lg items-center px-4 py-2 bg-blue-300 text-black font-semibold rounded-t-md"
            onClick={() => toggleAccordion(index)}
            whileHover={{ scale: 1.02 }}
          >
            {item.title}
            <span
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </motion.button>

          {activeIndex === index && (
            <motion.div
              className="bg-blue-50 p-4 rounded-b-md w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-sm text-gray-600">{item.body}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Faqs;
