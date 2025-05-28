import React, { useEffect, useState } from 'react';
import data from '../../data/db.json';

const Faqs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [faqs , setFaqs] = useState([])
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


    useEffect(()=>{
        setFaqs(data.faqs)
    })

  return (
    <div className="w-full h-auto mt-20 px-5 md:px-0 py-5">

       <div className="w-full md:max-w-3/4 md:px-10 mt-6">
       <h2 className="text-3xl font-bold md:px-5 mb-10">FAQs</h2>

      {faqs.map((item, index) => (
        <div key={index} className="mb-5 md:ml-5 rounded-md shadow-md">
          <button
            className="w-full flex justify-between text-start cursor-pointer text-sm md:text-lg items-center px-4 py-2 bg-blue-300 text-black font-semibold rounded-t-md"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {activeIndex === index && (
            <div className="bg-blue-50 p-4 rounded-b-md w-full">
              <p className="text-sm text-gray-600">{item.body}</p>
            </div>
          )}
        </div>
      ))}

    </div>

    </div>
  );
};

export default Faqs;
