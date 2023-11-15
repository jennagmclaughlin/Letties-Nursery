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
            <nav className="border-b border-gray-300 relative top-0 z-50 bg-white px-5">
                <div className="container mx-auto w-full md:container relative py-4 flex justify-between items-center bg-white">
                    <a href="#">
                        <img src={logo} alt="logo" className="h-11" />
                    </a>
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
