import React from 'react';
import icon from "../assets/Pic in College Dress.jpg";
import { FaBriefcase, FaBell } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useDarkMode } from '../Context/DarkMode';

const Navbar = () => {
    const { darkMode, setDarkMode } = useDarkMode();

    function toggleDarkMode() {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    }
    

    return (
        <nav className={`flex justify-between items-center border-b-2 h-[88px] max-w-[1920px] w-full mx-auto px-16 
            ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-500'}`}>

            <div className="flex items-center gap-4">
                <FaBriefcase size={24} color={darkMode ? 'orange' : 'orange'} />
                <div className={`heading text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Explorin Solutions</div>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="saved" className="h-[20px] w-[20px]" />
                    <label htmlFor="saved" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-black'}`}>My saved jobs only</label>
                </div>

                <FaBell size={24} color={darkMode ? 'white' : 'black'} />

                <img src={icon} alt="icon" className={`h-[40px] w-[40px] rounded-full border-2 
                    ${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />

                {darkMode ? (
                    <FaSun onClick={toggleDarkMode} className="text-yellow-500 cursor-pointer" size={24} />
                ) : (
                    <FaMoon onClick={toggleDarkMode} className="text-gray-900 cursor-pointer" size={24} />
                )}
            </div>
        </nav>

    );
};

export default Navbar;
