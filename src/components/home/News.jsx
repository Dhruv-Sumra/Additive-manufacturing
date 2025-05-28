import React, { useEffect, useState } from "react";
import data from "../../data/db.json";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(data.News);
  }, []);

  return (
    <div className="w-full h-auto mt-10 py-10">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold">Latest news</h2>
      </div>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="relative pb-10 bg-blue-50 shadow-md rounded-md flex flex-col items-center overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover "
            />

            <div className="p-4">
              <p>
                <i className="fa-solid fa-calendar-days text-blue-600"></i>{" "}
                {item.date}
              </p>

              <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
              <p className="text-black mt-2">{item.body}</p>
            </div>

            <a href="#">
              <button className="absolute  bottom-3 right-3 font-semibold hover:text-blue-600 cursor-pointer text-blue-500 text-xl">
                Read more
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
