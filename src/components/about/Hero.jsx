import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] relative mt-20">

      <div className="absolute h-[60vh] inset-0">
        <img
          className="h-full w-full object-cover"
          src={'https://images.squarespace-cdn.com/content/v1/5adf16d696d4555c68034a46/1576657272703-2K4925U784IVYLBJ5NOY/DSC02669.jpg'}
          alt="Poster of Home page"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>


      <div className="relative z-10 flex flex-col items-start py-40 h-screen px-5 md:px-15">
        <h2 className="text-gray-200 text-3xl font-bold drop-shadow-2xl md:font-extrabold md:text-5xl text-center md:text-start md:max-w-[50%] leading-tight">
         Pioneering India's Additive Manufacturing Future Since 2025
        </h2>

      </div>
    </div>

  );
};

export default Hero;
