import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/db/latest-news");
        if (!response.ok) {
          throw new Error("Failed to fetch featured events");
        }
        const data = await response.json();
        setNews(data.data);
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
        <p>Loading Latest news...</p>
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
        <h2 className="text-4xl font-bold">Latest news</h2>
      </motion.div>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {news.map((item, index) => (
          <motion.div
            key={index}
            className="relative pb-10 bg-blue-50 shadow-md rounded-md flex flex-col items-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
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
                <i className="fa-solid fa-calendar-days text-blue-600"></i>{" "}
                {item.date}
              </p>
              <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
              <p className="text-black mt-2">{item.body}</p>
            </div>

            <a href="#">
              <motion.button
                className="absolute bottom-3 right-3 font-semibold hover:text-blue-600 cursor-pointer text-blue-500 text-xl"
                whileHover={{ scale: 1.01 }}
              >
                Read more
              </motion.button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default News;