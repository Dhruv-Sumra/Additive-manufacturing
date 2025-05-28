import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[40vh] flex justify-center items-center relative mb-5 md:my-20 mt-20">
      <div className="absolute h-[40vh] inset-0">
        <img
          className="h-full w-full object-cover"
          src={
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d1df3b140791961.6247d30e80686.jpg"
          }
          alt="Poster of Home page"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center py-40 h-auto px-5 md:px-15">
        <h2 className="text-white text-3xl font-bold drop-shadow-2xl md:font-extrabold md:text-5xl text-center md:text-start md:max-w-full mx-auto leading-tight">
          Connect with India’s AM Leadership
        </h2>

        </div>
      </div>
  );
};

export default Hero;
