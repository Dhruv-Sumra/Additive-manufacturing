import React, { useEffect, useState } from "react";
import data from "../../data/db.json";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data.resourceCards);
  });
  return (
    <div className="px-3 md:px-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-6">
   
        {cards.map((item, index) => (
            <div key={index} className="card_scale bg-blue-100 h-full overflow-hidden shadow-md rounded-md flex flex-col md:flex-row md:justify-between md:items-center ">
              <img src={item.img} alt={item.title} className="h-25 w-full md:w-30 md:h-full drop-shadow-lg object-cover" />

              <div className='md:mx-3 p-2 md:p-3'>
              <h2 className="text-sm md:text-lg font-semibold md:mt-3">{item.title}</h2>
              <p className="md:text-sm text-xs mt-2 ">{item.body}</p>
              </div>
            </div>
          )
        ) }
      </div>
  );
};

export default Cards;
