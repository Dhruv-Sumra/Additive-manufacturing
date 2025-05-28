import { NavLink , Link } from "react-router-dom";
import { useState, useEffect , useRef } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "/src/assets/logo3.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const location = useLocation();
  const menuRef = useRef(null)

  const toggleMenu = () => setIsOpen(!isOpen);
  const switchLanguage = () => setLanguage(language === "EN" ? "HI" : "EN");

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-gray-200 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90vw] mx-auto flex items-center justify-between p-4 h-20">
        <div className="flex items-center space-x-2 overflow-hidden bg-transparent w-80 h-18">
          <a href="/">
          <img
            src={logo}
            alt="ISAMC Logo"
            className="scale-110 md:scale-110 object-cover w-40 h-full md:h-30 md:w-full"
          /></a>
        </div>

        <nav
         className={`hidden lg:flex space-x-6 text-xl min-w-[500px] justify-between ${
    isScrolled ? "text-black" : location.pathname === "/" ? "text-white" : "text-black"}
  }`}

        >
           <NavLink to={'/'} className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "hover:text-amber-900"} links_border`
        }>
          Home
          </NavLink>
           <NavLink to={'/about'} className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "hover:text-amber-900"} links_border`
        }>
          About us
          </NavLink>
           <NavLink to={'/membership'} className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "hover:text-amber-900"} links_border`
        }>
          Membership
          </NavLink>
           <NavLink to={'/events'} className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "hover:text-amber-900"} links_border`
        }>
          Events
          </NavLink>
           <NavLink to={'/publications'} className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "hover:text-amber-900"} links_border`
        }>
          Publications
          </NavLink>
           <NavLink to={'/resources'} className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "hover:text-amber-900"} links_border`
        }>
          Resources
          </NavLink>
           <NavLink to={'/contact'} className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "hover:text-amber-900"} links_border`
        }>
          Contact us
          </NavLink>
         
        </nav>

        <div className="md:flex items-center space-x-4 hidden">
          <button
            onClick={switchLanguage}
            className={`${
              isScrolled
                ? "text-black hover:text-gray-600"
                : location.pathname === "/" ? "text-white hover:text-gray-200" : "text-black"}  cursor-pointer border px-3 py-1 rounded`}
          >
            <i className="fa-solid fa-globe"></i>{" "}
            {language === "EN" ? "हिन्दी" : "EN"}
          </button>
          <Link
            to="/login"
            className="text-white transi bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className={`md:hidden z-110 text-blue-500 cursor-pointer transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        
        <div
        ref={menuRef}
          className={`z-100 bg-blue-100 md:hidden opacity-90 fixed top-0 right-0 w-2/3 h-auto py-5 
  transition-all duration-300 rounded-bl-sm  ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
        >
          <div className="w-full h-20 mt-2">

            <a href="/">
            <img
              src={logo}
              alt="ISAMC Logo"
              className="h-full object-cover w-50"
            /></a>
          </div>

          <div className="md:hidden px-4 pb-4 space-y-2 flex flex-col">
            <NavLink to="/" className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-gray-600"} block hover:text-blue-600`}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-gray-600"} block hover:text-blue-600`}
            >
              About us
            </NavLink>
            <NavLink
              to="/membership"
              className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-gray-600"} block hover:text-blue-600`}
            >
              Membership
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-gray-600"} block hover:text-blue-600`}
            >
              Events
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-gray-600"} block hover:text-blue-600`}
            >
              Publications
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-gray-600"} block hover:text-blue-600`}
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact"
             className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-gray-600"} block hover:text-blue-600`}
            >
              Contact us
            </NavLink>
          </div>

          <div className="flex items-center space-x-4 px-4">
            <button
              onClick={switchLanguage}
              className="text-black hover:text-gray-600 cursor-pointer border px-3 py-1 text-sm rounded"
            >
              <i className="fa-solid fa-globe"></i>{" "}
              {language === "EN" ? "हिन्दी" : "EN"}
            </button>
            <Link
              to="/login"
              className={`text-white transi bg-blue-500 px-3 py-1 text-sm rounded-md hover:bg-blue-600
                ${isScrolled ? "text-black" : window.location.pathname === "/" ? "text-white" : "text-black"}`}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
