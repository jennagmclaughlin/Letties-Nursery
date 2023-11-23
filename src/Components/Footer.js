import React from "react";
import { Link } from "react-router-dom";
// import site logo
import WhiteLogoVertical from "./Assets/img/white-logo-vertical.png";
import WhiteLogo from "./Assets/img/white-logo-text.png";
// import icons
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="bg-dark-green w-full">
            <div className="container px-4 py-12 mx-auto text-white">
                {/* Links */}
                <div className="flex flex-col-reverse lg:flex-row mb-8 lg:justify-between">
                    {/* Links */}
                    <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-20 lg:gap-y-0 text-center lg:text-left">
                        {/* Customer service */}
                        <div>
                            <h3>Customer Service</h3>
                            <ul className="text-gray-400">
                                <li>FAQ</li>
                                <li>Shipping & Handling</li>
                                <li>Refund Policy</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        {/* My nursery */}
                        <div>
                            <h3>My Nursery</h3>
                            <ul className="text-gray-400">
                                <li>Account</li>
                                <li>Track Order</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                        {/* About */}
                        <div>
                            <h3>About</h3>
                            <ul className="text-gray-400">
                                <li>Our story</li>
                                <li>Benefits</li>
                            </ul>
                        </div>
                    </div>
                    {/* Social media */}
                    <div className="flex justify-center gap-x-8 mb-8 lg:mb-0 text-2xl text-black">
                        {/* Facebook */}
                        <div className="bg-white rounded-xl w-[2rem] h-[2rem] p-1 flex items-center justify-center">
                            <BiLogoFacebook />
                        </div>
                        {/* Instagram */}
                        <div className="bg-white rounded-xl w-[2rem] h-[2rem] p-1 flex items-center justify-center">
                            <BiLogoInstagram />
                        </div>
                        {/* Twitter */}
                        <div className="bg-white rounded-xl w-[2rem] h-[2rem] p-1 flex items-center justify-center">
                            <BiLogoTwitter />
                        </div>
                    </div>
                </div>
                {/* Logo and copyright */}
                <div className="flex flex-col items-center justify-center">
                    {/* Logo on small screens */}
                    <div className="block lg:hidden">
                        <img src={WhiteLogoVertical} alt="Lettie's Nursery" className="max-w-[150px] mb-4" />
                    </div>
                    {/* Logo on large screens */}
                    <div className="hidden lg:block">
                        <img src={WhiteLogo} alt="Lettie's Nursery" className="max-w-[250px] mb-2" />
                    </div>
                    {/* Copyright */}
                    <div className="flex flex-col lg:flex-row items-center lg:justify-around gap-y-2 lg:gap-x-6 lg:gap-y-0">
                        <p>Copyright &copy; 2023</p>
                        <p>LettiesNursery.com</p>
                        <p>(###) ###-####</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
