import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const items = [
    { title: "Join a Community of Visionaries", text: "At ISAMC, membership isn’t just about access—it’s about belonging..." },
    { title: "Exclusive Learning & Collaboration", text: "Gain access to cutting-edge research, expert-led workshops..." },
    { title: "Shape the Future of Scientific Advancements", text: "As a member, you’re not just observing innovation—you’re part of it..." },
    { title: "Events, Resources & Recognition", text: "Enjoy priority access to exclusive events, resources..." },
    { title: "Become a Member Today!", text: "Be part of something bigger. Join ISAMC and start making an impact." },
  ];

  return (
    <motion.div
      className="px-5 md:px-15 w-full h-auto flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-xl md:text-3xl font-semibold mb-5">Why Become a Member?</h2>
      </motion.div>

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
        >
          <h2 className="text-lg md:text-xl font-medium">{item.title}</h2>
          <p className="mt-3 w-full md:w-4/5">{item.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Info;