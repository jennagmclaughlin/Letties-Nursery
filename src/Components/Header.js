import React from "react";
import { Link } from "react-router-dom";
// import hero img
import Hero from "./Assets/img/hero.png";

const Header = () => {
    return (
        <header className="bg-dark-green w-full h-[600px] overflow-hidden">
            <div className="container h-full mx-auto px-5 flex flex-col md:flex-row items-center justify-center md:justify-between relative">
                <div className="md:w-[60%] lg:w-[75ch] text-center md:text-left">
                    {/* Site title */}
                    <h3 className="buenard text-xl text-white">Lettie's Nursery</h3>
                    {/* Site slogan */}
                    <h1 className="buenard font-bold text-white text-7xl">The Best Greenery for Cats and Dogs</h1>
                    {/* Site blurb */}
                    <p className="text-gray-400 text-sm mt-4">
                        Welcome to a plant lover's dream where your cat and dog's safety comes first! Explore our store for a handpicked assortment of pet-friendly plants,
                        specially chosen to bring the outdoors inside without compromising the well-being of your furry companions.
                    </p>
                    <div className="mt-5 flex flex-col md:flex-row items-center gap-5">
                        {/* Browse call to action */}
                        <Link to={`/plants`}>
                            <button className="bg-white hover:bg-gray-400 rounded-xl w-[200px] md:w-auto py-2 px-6 transition duration-200">Browse our collection</button>
                        </Link>
                        {/* Learn more */}
                        <button className="text-gray-400 relative after:bg-gray-400 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">
                            Learn more
                        </button>
                    </div>
                </div>
                {/* Hero img */}
                <img src={Hero} alt="Hero" className="hidden md:block h-[300px] lg:h-full ml-5 lg:ml-0 self-end" />
            </div>
        </header>
    );
};

export default Header;
