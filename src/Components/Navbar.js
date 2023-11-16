import React, { useContext, useState, useEffect } from "react";
// import Link
import { Link } from "react-router-dom";
// import site logo
import Logo from "./Assets/img/logo-text.png";
import WhiteLogo from "./Assets/img/white-logo-text.png";
// import icons
import { BiCartAlt } from "react-icons/bi";
// import sidebar context
import { SidebarContext } from "../Context/SidebarContext";
// import cart context
import { CartContext } from "../Context/CartContext";

export const Navbar = () => {
    // nav state
    const [isActive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    // event listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <nav className={`${isActive ? "bg-white shadow-md" : "bg-dark-green"} sticky top-0 w-full z-50 transition duration-200`}>
            <div className="relative px-5">
                <div className="container mx-auto w-full md:container relative py-4 flex justify-between items-center">
                    <Link to={"/"}>
                        <img src={isActive ? Logo : WhiteLogo} alt="Lettie's Nursery" className="h-[45px]" />
                    </Link>
                    {/* <a className="inline-block ml-auto mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-300 text-sm font-bold rounded-xl transition duration-200" href="#">
                        Login
                    </a> */}
                    {/* Cart */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Open cart"
                        className={`${isActive ? "text-black" : "text-white"} text-2xl hover:text-gray-500 font-bold rounded-xl`}
                    >
                        <BiCartAlt />
                    </button>
                    {/* Item amount circle */}
                    <div className="bg-purple min-w-[20px] aspect-square flex items-center justify-center rounded-2xl absolute top-3 -right-3 text-xs text-white">{itemAmount}</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
