import React from "react";
import logo from "/public/logo2.png";

const Footer = () => {
  return (
    <div className="px-5 md:px-15 py-5 bg-blue-200 w-full mt-10 h-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-3">
          <div className="flex flex-start space-x-2 items-center">
            <img className="h-10" src={logo} alt="logo" />
            <h2 className="text-2xl font-bold">ISAMC</h2>
          </div>

          <p>
            Indian Society of Additive Manufacturing and Characterization -
            Advancing the science and technology of additive manufacturing in
            India.
          </p>

          <div className="flex flex-start space-x-5 text-3xl text-blue-500 ">
            <a href="#">
              <i className="fa-brands fa-instagram hover:text-blue-600 hover:scale-110 transi"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook-f hover:text-blue-600 hover:scale-110 transi"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter hover:text-blue-600 hover:scale-110 transi "></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in hover:text-blue-600 hover:scale-110 transi"></i>
            </a>
          </div>
        </div>

        <div className="md:px-10">
          <h2 className="text-2xl font-bold">Quick Links</h2>

          <div className="flex flex-col px-3 text-blue-500 font-medium space-y-1 mt-3">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a href="about" className="hover:text-blue-600">
              About us
            </a>
            <a href="membership" className="hover:text-blue-600">
              Membership
            </a>
            <a href="events" className="hover:text-blue-600">
              Events
            </a>
            <a href="publications" className="hover:text-blue-600">
              Publications
            </a>
            <a href="resources" className="hover:text-blue-600">
              Resources
            </a>
            <a href="contact" className="hover:text-blue-600">
              Contact us
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-start space-x-2 items-center">
            <h2 className="text-2xl font-bold">Contact us</h2>
          </div>

          <div className="pr-3 font-medium space-y-2 ">
            <p>
              <i className="text-blue-500 fa-solid fa-location-dot "></i>
              &nbsp; ISAMC Headquarters, IIT Delhi Campus, Hauz Khas, New Delhi
              - 110016, India
            </p>

            <p>
              <i className="text-blue-500 fa-solid fa-phone"></i>
              &nbsp; contact@isamc.org
            </p>

            <p>
              <i className="text-blue-500 fa-solid fa-envelope"></i>
              &nbsp; +91 11 2659 7135
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-start space-x-2 items-center">
            <h2 className="text-2xl font-bold">Newsletter</h2>
          </div>

          <p>
            Subscribe to our newsletter to receive updates on events,
            publications, and industry news.
          </p>

          <input
            type="text"
            placeholder="enter you email"
            className="bg-white px-3 py-1 rounded-sm"
          />
          <br />
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-1 cursor-pointer px-3 rounded-lg md:text-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-5 md:flex justify-between">
        <p className="font-semibold hidden md:block">
          © 2025 Indian Society of Additive Manufacturing and Characterization.
          All rights reserved
        </p>

        <div className="space-x-5">
          <a
            className="text-lg font-semibold text-blue-500 hover:text-blue-600 cursor-pointer "
            href="#"
          >
            Privacy policy
          </a>
          <a
            className="text-lg font-semibold text-blue-500 hover:text-blue-600 cursor-pointer "
            href="#"
          >
            Terms of use
          </a>

        </div>

        <p className="text-sm md:text-semibold md:hidden mt-2">
          © 2025 Indian Society of Additive Manufacturing and Characterization.
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
