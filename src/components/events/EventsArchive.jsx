import React, { useState , useEffect } from "react";
import data from "../../data/db.json";

const EventsArchive = () => {
  const [archives , setArchives] = useState([])

  useEffect(() => {
    setArchives(data.eventsArchives);
  }, []);

  return (
    <div className="w-full h-auto py-10 mt-10 md:px-15 px-5">
      <h2 className="text-center text-2xl md:text-4xl font-bold ">
        Past events archive
      </h2>

      <div className="flex flex-col md:flex-row justify-between h-auto md:h-90 gap-20 mt-6">
        <div className="w-full md:w-1/3 h-full p-4">
          <h2 className="md:text-2xl font-medium">Events and shows</h2>

          <p className="mt-3">
            From dynamic conferences to engaging workshops, ISAMC’s events and
            shows bring together experts, enthusiasts, and pioneers to explore
            breakthroughs in science, technology, and research. Stay connected
            with cutting-edge discussions, interactive sessions, and exclusive
            showcases that shape the future.
          </p>

          <a href="#">
            <button className="max-w-auto mt-6 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-1 cursor-pointer px-2 rounded-lg tracking-wide text-sm md:text-lg">
              Join upcoming events
            </button>
          </a>
        </div>

        <div className=" md:p-4 flex flex-col gap-5 md:bg-blue-100 w-full md:w-2/3 h-full ">
          {archives.map((item , index)=>(
            <div key={index} className="w-full md:gap-7 h-auto md:h-25 rounded-sm bg-blue-50 p-2 md:p-1 flex justify-between">
                <div className="w-1/5 bg-blue-300 rounded-sm h-27 md:h-22 flex flex-col items-center justify-center">
                    <p className=" md:text-3xl font-semibold">{item.date.day}</p>
                    <p className="text-xs md:text-lg">{item.date.month}</p>
                </div>

                <div className="w-5/6 md:w-4/5 rounded-sm h-full px-4">
                    <p className="text-sm md:text-lg font-semibold">{item.title}</p>
                    <p className="text-xs md:text-lg">{item.body}</p>
                </div>

            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default EventsArchive;
