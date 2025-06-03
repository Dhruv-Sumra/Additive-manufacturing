import React, { useEffect, useState } from 'react';


const Leadership = () => {
 const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/db/member-tiers");
        if (!response.ok) {
          throw new Error("Failed to fetch featured events");
        }
        const data = await response.json();
        setTiers(data.data);
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
        <p>Loading testimonials...</p>
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
        <h2 className="text-3xl md:text-4xl font-bold">Membership tiers</h2>
      </div>

      <div className="px-3 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6">
   
        {tiers.map((item, index) => (
            <div key={index} className="card_scale p-4 bg-blue-100  shadow-md rounded-md flex flex-col md:flex-row justify-between items-center text-center">
              <img src={item.img} alt={item.fullName} className="h-20 w-20 md:w-20 md:h-20 drop-shadow-lg object-cover" />

              <div className='mx-3'>
              <h2 className="text-lg md:text-lg font-semibold mt-3">{item.type}</h2>
              <h2 className="">{item.time_period}</h2>
              <h2 className="text-blue-500 mt-3">{item.price}</h2>
              </div>
            </div>
          )
        ) }
      </div>
    </div>
  );
};

export default Leadership;