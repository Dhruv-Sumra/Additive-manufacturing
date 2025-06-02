import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../data/db.json";

const Member = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    setMember(data.Member);
  }, []);

  return (
    <motion.div
      className="px-5 md:px-15 w-full h-auto mt-15 bg-blue-50 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl md:text-4xl text-center md:text-start font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Membership benefits
      </motion.h2>

      <motion.p
        className="md:text-lg mt-2 w-full md:w-3/4 text-center md:text-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Join ISAMC to connect with professionals, access exclusive resources,
        and advance your career in additive manufacturing.
      </motion.p>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {member.map((item, index) => (
          <motion.div
            key={index}
            className="card_scale bg-blue-200 shadow-md p-3 md:p-4 rounded-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="h-15 md:h-30 object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
            <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
            <p className="text-black mt-2">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <a href="/membership#payment">
          <motion.button
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 cursor-pointer px-3 md:px-5 rounded-lg tracking-wide md:text-2xl"
            whileHover={{ scale: 1.05 }}
          >
            Become a Member
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Member;