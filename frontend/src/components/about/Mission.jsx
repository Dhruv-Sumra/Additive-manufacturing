import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Mission = () => {
const [vision, setVision] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/db/vision");
        if (!response.ok) {
          throw new Error("Failed to fetch featured events");
        }
        const data = await response.json();
        setVision(data.data);
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
        <p>Loading featured events...</p>
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


  return (
    <motion.div
      className="w-full h-auto py-16 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Mission & Vision</h2>
      </motion.div>

      <div className="px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {vision.map((item, index) => (
          <motion.div
            key={item.id || index}
            className="bg-blue-100 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay:0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="h-20 w-20 object-contain mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mission;