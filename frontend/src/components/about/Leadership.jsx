import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';


const Leadership = () => {
const [leadership, setLeadership] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/db/leadership");
        if (!response.ok) {
          throw new Error("Failed to fetch featured events");
        }
        const data = await response.json();
        setLeadership(data.data);
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
        <p>Loading Leadership section...</p>
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