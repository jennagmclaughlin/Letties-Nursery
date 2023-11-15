import React, { useContext } from "react";
// import site logo
import logo from "./Assets/img/logo-text.png";
// import icons
import { BiCartAlt } from "react-icons/bi";
// import sidebar context
import { SidebarContext } from "../Context/SidebarContext";

export const Navbar = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    return (
        <div>
            <nav className="border-b border-gray-300 relative top-0 z-50 bg-white">
                <div className="mx-auto w-full md:container relative px-4 py-4 flex justify-between items-center bg-white">
                    <a href="#">
                        <img src={logo} alt="logo" className="h-11" />
                    </a>
                    {/* Hamburger menu */}
                    {/* <button onClick={()=>setOpen(!open)} className="md:hidden flex text-3xl absolute top-[1.5rem] right-4 text-black hover:text-gray-600" ariaLabel="Navigation">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </button>
          <ul className={`
            nav_links-border-bottom-sm left-0 px-4 pb-4 bg-white w-screen absolute transition-all duration-300 ease-in
            ${open ? 'top-[81px]':'top-[-250px]'}
            md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:pb-0 md:w-auto md:px-0 md:ml-0 md:mx-auto md:flex md:items-center md:space-x-6 md:transition-none`}>
            <li className="my-6 md:my-0"><a className="text-sm hover:text-gray-600" href="#">Home</a></li>
            <li className="hidden md:flex text-gray-400 cursor-default">|</li>
            <li className="my-6 mb-4 md:my-0"><a className="text-sm hover:text-gray-600" href="#">Contact</a></li>
          </ul> */}
                    <a className="inline-block ml-auto mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-300 text-sm font-bold rounded-xl transition duration-200" href="#">
                        Login
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Open cart"
                        className="py-2 px-5 bg-purple hover:bg-purple-hover text-lg text-white font-bold rounded-xl transition duration-200"
                    >
                        <BiCartAlt />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
