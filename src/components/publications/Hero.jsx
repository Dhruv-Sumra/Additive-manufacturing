import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] relative mt-20">

      <div className="absolute h-[60vh] inset-0">
        <img
          className="h-full w-full object-cover"
          src={'https://th.bing.com/th/id/R.68d38d52507f9befeeca40e35e236ac6?rik=yZVqG3nzZOJXjg&riu=http%3a%2f%2fweandthecolor.com%2fwp-content%2fuploads%2f2016%2f08%2fBased-on-simple-lines-and-patterns.jpg&ehk=wlJjD1mIfopk9CP%2b%2fPdKqC7Q9flQrvrWoJwXKR3IMFA%3d&risl=&pid=ImgRaw&r=0'}
          alt="Poster of Home page"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>


      <div className="relative z-10  flex flex-col items-start gap-5 py-40 h-screen px-5 md:px-15">
        <h2 className="text-gray-200 md:mx-0 mx-auto text-3xl font-bold drop-shadow-2xl md:font-extrabold md:text-5xl text-center md:text-start md:max-w-[50%] leading-tight">
         ISAMC publications
        </h2>

        <p className="text-gray-200 text-xl font-bold drop-shadow-2xl md:font-extrabold md:text-3xl text-center md:text-start md:max-w-[50%] leading-tight">Advancing Additive Manufacturing Knowledge Through Open Research</p>

      </div>
    </div>

  );
};

export default Hero;
