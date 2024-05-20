// Navbar.js
import React, { useState } from 'react';

import { FaBars, FaSearch, FaShareAlt, FaEnvelope } from 'react-icons/fa';
import NavLogo from '../assets/logo.png';
import mountainImage from '../assets/mountains.jpg'; // Import the image
// import Sidebar from './sidebar';


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="flex absolute z-50 h-32 w-full items-top justify-between bg-gradient-to-b from-white via-white to-transparent bg-opacity-80 p-4">
      {/* Sidebar Button */}
      <button onClick={toggleSidebar} className="text-blue-400 ">
        <FaBars size={40} className='border-solid border-2 p-1 border-blue-400 bg-white shadow-2xls' />
      </button>
      {/* //msg btn */}

      <button className="ms-10  bg-transparent hidden lg:block text-blue-400">
        <FaEnvelope className='border-solid border-2 border-blue-400 p-1 bg-white shadow-2xl' size={40} />
      </button>


      {/* Center Logo/Photo */}
      <div className="flex justify-center flex-grow h-20">
        <img src={NavLogo} alt="Logo" className="rounded-2xl p-4" />
      </div>
      {/* Right Side Icons */}
      <div className="items-center space-x-4  hidden lg:flex">

        <button className="p-2 ms-10 bg-transparent text-blue-400  ">
          <FaSearch size={40} className='border-solid border-blue-400  border-2 p-1 bg-white shadow-2xl' />
        </button>
        <button className="p-2 ms-10 bg-transparent text-blue-400">
          <FaShareAlt size={40} className='border-solid border-2 p-1 border-blue-400 bg-white shadow-2xl' />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-800 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className='flex '>
          <div className='flex flex-col w-1/2 items-start justify-start h-screen p-4'>
            <button onClick={toggleSidebar} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
            <div className='flex flex-col'>
              <ul className="list-none  px-9 py-8 text-3xl font-semibold space-y-6">
                <li>
                  <a href="#HOME" onClick={toggleSidebar}>
                    <span className="">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#INSIGHTS" onClick={toggleSidebar}>
                    <span className="">Insights</span>
                  </a>
                </li>
                <li>
                  <a href="#NETWORK" onClick={toggleSidebar}>
                    <span className="">Network</span>
                  </a>
                </li>
                <li>
                  <a href="#CTA" onClick={toggleSidebar}>
                    <span className="">CTA</span>
                  </a>
                </li>
                <li>
                  <a href="#CTA" onClick={toggleSidebar}>
                    <span className="">Contact Us</span>
                  </a>
                </li>
              </ul>
              <div className='flex lg:hidden'>
                <button className="ms-10  bg-transparent  lg:block text-blue-400">
                  <FaEnvelope className='border-solid border-2 border-blue-400 p-2  shadow-2xl' size={45} />
                </button>
                <button className="p-2 ms-10 bg-transparent text-blue-400  ">
                  <FaSearch size={45} className='border-solid border-blue-400  border-2 p-2  shadow-2xl' />
                </button>
                <button className="p-2 ms-10 bg-transparent text-blue-400">
                  <FaShareAlt size={45} className='border-solid border-2 p-2 border-blue-400 shadow-2xl' />
                </button>
              </div>
            </div>

          </div>
          <div className="hidden lg:flex bg-black w-1/2 " style={{
            backgroundImage: `url(${mountainImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8
          }}>

          </div>

        </div>

      </div>
    </nav >

  );
};

export default Navbar;
