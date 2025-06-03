import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cards = () => {
     const [cards, setCards] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
         const fetchEventsData = async () => {
           try {
             const response = await fetch("http://localhost:4000/api/v1/db/resources");
             if (!response.ok) {
               throw new Error("Failed to fetch ");
             }
             const data = await response.json();
             setCards(data.data);
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
             <p>Loading resources...</p>
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