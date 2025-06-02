import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../data/db.json";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data.resourceCards);
  }, []);

  return (
    <motion.div
      className="px-3 md:px-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {cards.map((item, index) => (
        <motion.div
          key={index}
          className="card_scale bg-blue-100 h-full overflow-hidden shadow-md rounded-md flex flex-col md:flex-row md:justify-between md:items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.img
            src={item.img}
            alt={item.title}
            className="h-25 w-full md:w-30 md:h-full drop-shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration:0.2,  ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          />

          <div className="md:mx-3 p-2 md:p-3">
            <h2 className="text-sm md:text-lg font-semibold md:mt-3">{item.title}</h2>
            <p className="md:text-sm text-xs mt-2">{item.body}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;