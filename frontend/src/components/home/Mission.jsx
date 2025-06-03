import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Mission = () => {
  const [mission, setMission] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/db/home-mission");
        if (!response.ok) {
          throw new Error("Failed to fetch mission data");
        }
        const data = await response.json();
        setMission(data.data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMissionData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-auto mt-20 bg-blue-50 py-5 flex justify-center items-center">
        <p>Loading mission data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-auto mt-20 bg-blue-50 py-5 flex justify-center items-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full h-auto mt-20 bg-blue-50 py-5"
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
        <h2 className="text-2xl md:text-4xl font-bold">Mission & objectives</h2>
        <p className="px-5 text-sm md:text-xl mt-3">
          ISAMC is committed to advancing the field of additive manufacturing through key strategic objectives.
        </p>
      </motion.div>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {mission.map((item, index) => (
          <motion.div
            key={item.id || index}
            className="hover:scale-101 transition-all duration-300 bg-blue-200 shadow-md p-4 rounded-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="h-30 w-30 md:w-40 md:h-40 rounded-full object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            />
            <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
            <p className="text-black mt-2">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mission;