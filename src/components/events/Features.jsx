import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';


const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
      setFeatures(data.features);
  }, []);


  return (
    <div className="w-full h-auto mt-20 bg-blue-50 py-5">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Features & Benefits</h2>
      </div>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
   
        {features.map((item, index) => (
            <div key={index} className="p-4 rounded-md flex flex-col items-center text-center">
              <img src={item.img} alt={item.title} className="h-20 w-20 md:w-30 md:h-30  object-cover" />
              <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
              <p className="text-black mt-2">{item.body}</p>
            </div>
          )
        ) }
      </div>
    </div>
  );
};

export default Features;