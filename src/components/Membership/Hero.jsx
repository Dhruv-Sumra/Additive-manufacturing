import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] relative mt-20">
      <div className="absolute h-[60vh] inset-0">
        <img
          className="h-full w-full object-cover"
          src={
            "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60108123d58c7f4754c2b6b5_6002086f72b727df6d01df3b_business-website-examples.jpeg"
          }
          alt="Poster of Home page"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-start py-40 h-screen px-5 md:px-15">
        <h2 className="text-gray-200 text-3xl font-bold drop-shadow-2xl md:font-extrabold md:text-5xl text-center md:text-start md:max-w-full mx-auto leading-tight">
          Powering India’s AM Future Together
        </h2>


          <div className="w-full md:gap-5 md:flex flex-col md:flex-row flex md:justify-center items-center">
            <a href="#">
              <button className="w-40 mt-6 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-5 rounded-lg tracking-wide  md:text-2xl">
                Join ISAMC
              </button>
            </a>

            <a href="#">
              <button className="w-40 mt-6 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-5 rounded-lg tracking-wide  md:text-2xl">
                Renew membership
              </button>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Hero;
