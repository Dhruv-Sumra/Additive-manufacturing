import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';


const Mission = () => {
  const [mission, setMission] = useState([]);

  useEffect(() => {
      setMission(data.Mission);
  }, [mission]);


  return (
    <div className="w-full h-auto mt-20 bg-blue-50 py-5">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Mission & objectives</h2>
        <p className="px-5 text-sm md:text-xl mt-3">
          ISAMC is committed to advancing the field of additive manufacturing through key strategic objectives.
        </p>
      </div>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
   
        {mission.map((item, index) => (
            <div key={index} className="card_scale bg-blue-200 shadow-md p-4 rounded-md flex flex-col items-center text-center">
              <img src={item.img} alt={item.title} className="h-30 w-30 md:w-40 md:h-40 rounded-full object-cover" />
              <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
              <p className="text-black mt-2">{item.body}</p>
            </div>
          )
        ) }
      </div>
    </div>
  );
};

export default Mission;