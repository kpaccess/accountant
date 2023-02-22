import React, { useState } from 'react';
import {
  FaBars,
  FaFacebookF,
} from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#ourservices">Our Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <a
          rel="noreferrer"
          href="https://www.facebook.com/tejendra.khatiwada.5"
          target="_blank"
        >
          <FaFacebookF
            size={30}
            className="mx-4"
          />
        </a>
      </div>
      {/* { Hamburger Icon} */}
      <div
        className="sm:hidden z-10"
        onClick={handleNav}
      >
        <FaBars
          size={20}
          className="mr-4 cursor-pointer"
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className="h-100 w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#ourservices">
              Our Services
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
