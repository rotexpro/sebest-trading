import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-primary font-bold"
      : "text-gray-600 hover:text-primary-hover transition duration-300";

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white fixed flex items-center w-full top-0 z-50 h-[10vh]" ref={navRef}>
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <img src={Logo} alt="Sebest Trading Logo" className="h-10 w-auto" />

        <button
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <ul
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } lg:opacity-100 lg:max-h-screen overflow-hidden lg:flex lg:space-x-6 absolute lg:relative bg-white w-full lg:w-auto top-12 left-0 lg:top-0 px-6 lg:px-0 shadow-md lg:shadow-none transition-all duration-300 ease-in-out`}
        >
          <li className="py-2 lg:py-0">
            <NavLink to="/" className={navLinkClasses} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="py-2 lg:py-0">
            <NavLink to="/about" className={navLinkClasses} onClick={closeMenu}>
              About us
            </NavLink>
          </li>
          <li className="py-2 lg:py-0">
            <NavLink
              to="/services"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="py-2 lg:py-0">
            <NavLink
              to="/gallery"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li className="py-2 lg:py-0">
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
