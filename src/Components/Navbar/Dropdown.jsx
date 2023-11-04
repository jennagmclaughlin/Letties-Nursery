import React from 'react';
import { useState } from 'react';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative md:flex flex-col md:items-center w-auto">
        <button onClick={() => setIsOpen((prev) => !prev)} className="text-sm flex items-center justify-between">
            <span className="hover:text-gray-600">Browse &nbsp;&nbsp;</span>
            {!isOpen ? (
                <BiCaretDown />
            ): (
                <BiCaretUp />
            )}
            {isOpen && (
                <div className="bg-gray-300 absolute top-5 md:top-7 flex flex-col items-start rounded-lg py-1 px-2 w-[150px]">
                    <a href="#" className="w-full rounded-lg text-left py-2 md:py-1 px-2 my-2 md:my-1 hover:bg-gray-200">All pets</a>
                    <a href="#" className="w-full rounded-lg text-left py-2 md:py-1 px-2 my-2 md:my-1 hover:bg-gray-200">House pets</a>
                    <a href="#" className="w-full rounded-lg text-left py-2 md:py-1 px-2 my-2 md:my-1 hover:bg-gray-200">Aquatic pets</a>
                </div>
            )}
        </button>
    </div>
  )
}

export default Dropdown