import React from 'react'
import { useState } from 'react';
import logo from './Assets/img/logo-text.png'
import Dropdown from './Assets/Dropdown.jsx'
import { BiCartAlt } from "react-icons/bi";


export const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="navbar nav_border-bottom-sm relative z-50 bg-white">
        <div className="mx-auto w-full md:container relative px-4 py-4 md:flex justify-between items-center bg-white">
          <a href="#">
            <img src={logo} alt="logo" className="h-12" />
          </a>
          {/* Hamburger menu */}
          <button onClick={()=>setOpen(!open)} className="md:hidden flex text-3xl absolute top-[1.5rem] right-4 text-black hover:text-gray-600" ariaLabel="Navigation">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </button>
          <ul className={`
            nav_links-border-bottom-sm left-0 px-4 pb-4 bg-white w-screen absolute transition-all duration-300 ease-in
            ${open ? 'top-[90px]':'top-[-250px]'}
            md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:pb-0 md:w-auto md:px-0 md:ml-0 md:mx-auto md:flex md:items-center md:space-x-6 md:transition-none`}>
            <li className="my-6 md:my-0"><a className="text-sm hover:text-gray-600" href="#">Home</a></li>
            <li className="hidden md:flex text-gray-400 cursor-default">|</li>
            <li className="my-8 md:my-0"><Dropdown /></li>
            <li className="hidden md:flex text-gray-400 cursor-default">|</li>
            <li className="my-6 md:my-0"><a className="text-sm hover:text-gray-600" href="#">Contact</a></li>
          </ul>
          <a className="hidden md:inline-block md:ml-auto md:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-200 text-sm font-bold rounded-xl transition duration-200" href="#">Login</a>
          <a className="hidden md:inline-block py-2 px-5 bg-purple hover:bg-purple-hover text-lg text-white font-bold rounded-xl transition duration-200" href="#" title="View cart"><BiCartAlt /></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;