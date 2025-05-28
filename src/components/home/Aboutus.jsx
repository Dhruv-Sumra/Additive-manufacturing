import React from "react";

const Aboutus = () => {
  return (
    <div className="px-5 md:px-15 w-full h-auto space-x-3 flex justify-between align-middle">
      <div className="md:w-3/5 w-full">
        <h2 className="text-4xl font-bold">About us</h2>

          <p className="text-lg font-semibold mb-2 mt-10 md:mt-15">
            Shaping the Future of Additive Manufacturing in India
          </p>
        <p className="">
          
          The Indian Society of Additive Manufacturing and Characterization
          (ISAMC) is dedicated to advancing 3D printing and material
          characterization in India. It serves as a hub for researchers,
          industry professionals, and innovators, fostering collaboration and
          knowledge exchange. ISAMC promotes cutting-edge technologies,
          organizes conferences, and supports research initiatives to drive the
          growth of additive manufacturing. Through education, networking, and
          industry partnerships, ISAMC plays a vital role in shaping the future
          of manufacturing and material sciences in India.
        </p>

        <a href="/about">
          <button className="mt-5 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-3 md:px-5 rounded-lg tracking-wide md:text-2xl text-xl">
            Read more
          </button>
        </a>
      </div>

      <div className="md:w-2/5 hidden md:block">
        <img
          className="w-full h-full shadow-lg card_scale"
          src="https://itamco.com/wp-content/uploads/2020/01/DZ2A7991_EDIT-scaled.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Aboutus;
