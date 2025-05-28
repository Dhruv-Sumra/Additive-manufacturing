import React from "react";
import poster from "/src/assets/poster.jpeg";
const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative">

      <div className="absolute h-[80vh] inset-0">
        <img
          className="h-full w-full object-cover"
          src={poster}
          alt="Poster of Home page"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>


      <div className="relative z-10 flex flex-col items-start py-40 h-screen px-5 md:px-15">
        <h2 className="text-gray-200 text-3xl font-bold drop-shadow-2xl md:font-extrabold md:text-5xl text-center md:text-start md:max-w-[50%] leading-tight">
          Advancing Additive Manufacturing and Characterization in India
        </h2>

        <div className="w-full md:block flex justify-center items-center">
        <a href="#">
          <button className="mt-6 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-5 rounded-lg tracking-wide text-xl md:text-2xl">
            Join Now
          </button>
        </a>
        </div>

      </div>
    </div>

  );
};

export default Hero;
