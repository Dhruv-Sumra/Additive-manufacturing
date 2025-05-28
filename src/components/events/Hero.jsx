import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] relative mt-20">
      <div className="absolute h-[60vh] inset-0">
        <img
          className="h-full w-full object-cover"
          src={
            "https://img.freepik.com/premium-photo/horizontal-poster-background-modern-minimalist-style-with-dynamic-liquid-gradient-shapes_481527-1473.jpg"
          }
          alt="Poster of Home page"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-start py-40 h-auto px-5 md:px-15 ">
        <h2 className=" text-gray-200 text-3xl font-bold drop-shadow-2xl md:font-extrabold md:text-5xl text-center md:text-start md:max-w-full mx-auto leading-tight">
          Powering India’s AM Future Together
        </h2>


          <div className="w-full md:gap-5 md:flex flex-col md:flex-row flex md:justify-center items-center">
            <a href="#">
              <button className="max-w-auto mt-6 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-5 rounded-lg tracking-wide  md:text-2xl">
                Upcoming events
              </button>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Hero;
