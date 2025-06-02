import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';


const Leadership = () => {
  const [leadership, setLeadership] = useState([]);

  useEffect(() => {
      setLeadership(data.leadership);
  }, []);


  return (
    <div className="w-full h-auto mt-20 py-5 md:px-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Leadership</h2>
      </div>

      <div className="px-3 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6">
   
        {leadership.map((item, index) => (
            <div key={index} className="card_scale pb-3 bg-blue-100  shadow-md rounded-md flex flex-col items-center text-center">
              <img src={item.img} alt={item.fullName} className="h-50 w-full md:w-full md:h-60 bg-blue-50 object-cover" />
              <h2 className="text-lg md:text-xl font-semibold mt-3">{item.fullName}</h2>
              <h2 className="md:text-lg">{item.post}</h2>
               <hr className='w-1/2 mt-2'/>
              <h2 className="text-blue-500 mt-3">{item.expertise}</h2>
            </div>
          )
        ) }
      </div>
    </div>
  );
};

export default Leadership;