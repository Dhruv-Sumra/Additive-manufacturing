import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';


const Generals = () => {
  const [generals, setGenerals] = useState([]);

  useEffect(() => {
      setGenerals(data.generals);
  }, []);


  return (
    <div className="w-full h-auto mt-20 py-5">
      <div className="md:pl-10">
        <h2 className="text-center md:text-start text-xl md:text-3xl font-bold">Generals</h2>
      </div>

      
    <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {generals.map((item, index) => (
            <div key={index} className="bg-blue-50 h-auto md:pb-0 pb-10 md:h-100 shadow-md rounded-md relative flex flex-col items-center overflow-hidden">
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

      
    </div>
  );
};

export default Generals;