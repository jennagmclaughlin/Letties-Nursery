import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdArrowRoundForward } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
// import components
import CartItem from "./CartItem";
// import sidebar context
import { SidebarContext } from "../Context/SidebarContext";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    return (
        <div className={`${isOpen ? "right-0" : "-right-full"} bg-white w-full md:w-[35vw] xl:max-w-[30vw] h-full fixed top-0 z-[99] shadow-2xl transition-all`}>
            <div className="border-b border-gray-300 p-4 flex items-center justify-between">
                <h2 className="buenard text-lg font-bold">My Cart (#)</h2>
                <button onClick={handleClose} aria-label="Close cart">
                    <IoMdArrowRoundForward className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
