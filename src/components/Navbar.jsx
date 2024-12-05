import React from 'react';
import icon from "../assets/Pic in College Dress.jpg";
import { FaBriefcase, FaBell } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center border-b-2 border-gray-500 h-[88px] max-w-[1920px] w-full mx-auto px-16">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <FaBriefcase size={24} color="orange" />
                <div className="heading text-xl font-bold">Explorin Solutions</div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="saved" className="h-[20px] w-[20px]" />
                    <label htmlFor="saved" className="text-sm">My saved jobs only</label>
                </div>

                <FaBell size={24} color="black" />

                <img src={icon} alt="icon" className="h-[40px] w-[40px] rounded-full" />
            </div>
        </nav>
    );
};

export default Navbar;
