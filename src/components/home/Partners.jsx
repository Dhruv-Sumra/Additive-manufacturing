import React, { useEffect, useState } from "react";
import data from "../../data/db.json";

const Publications = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(data.partners);
  }, []);

  return (
    <div className="w-full h-auto mt-20 py-5">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Partners</h2>
      </div>

      <div className="px-10 grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
        {partners.map((item, index) => (
          <div key={index} className="">
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover "
            />
            <h2 className="text-center text-lg md:text-xl">{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a href="">
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-3 md:px-5 rounded-lg tracking-wide md:text-2xl">
            Become a Partner
          </button>
        </a>
      </div>
    </div>
  );
};

export default Publications;
