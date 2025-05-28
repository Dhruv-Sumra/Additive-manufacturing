import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';


const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Industry insights", "Case studies"];
  

  useEffect(() => {
      setPublications(data.Publications);
  }, []);


  return (
    <div className="w-full h-auto mt-20 py-5">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Featured publications</h2>
        <p className="px-5 md:text-xl mt-3">
          Explore our collection of research papers, technical reports, and educational materials on additive manufacturing.
        </p>
      </div>

      
        
      <div className="flex space-x-2 justify-start w-full md:text-lg md:py-5 text-xs my-5 md:my-4 md:space-x-3 px-5 md:px-10">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-1 rounded-md transition cursor-pointer ${
            activeFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-blue-200 text-black hover:bg-blue-100"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
    <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {publications.map((item, index) => (
            <div key={index} className="bg-blue-50 shadow-md pb-5 md:pb-0 rounded-md relative flex flex-col items-center overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover " />
              
              <div className="p-4">
                <p>
                  <i className="fa-solid fa-calendar-days text-blue-600"></i> {item.date} - <b>{item.title}</b>
                </p>
                <p className="font-semibold mt-3">
                 {item.subtitle}
                </p>
                <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
                <p className="text-black mt-2">{item.body}</p>
              </div>
              <a href=""><button className='font-semibold absolute bottom-3 right-3 hover:text-blue-600 cursor-pointer text-blue-500'>Download PDF </button></a>
            </div>
          ))}
      </div>

      <div className='flex justify-center mt-3'><a href=""><button className='font-semibold hover:text-blue-600 cursor-pointer text-blue-500 text-xl'>View all resources →</button></a></div>
      
    </div>
  );
};

export default Publications;