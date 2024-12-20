import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useDarkMode } from '../Context/DarkMode';

const Footer = () => {
    const { darkMode } = useDarkMode();
    return (
        <footer className={`flex justify-around items-center h-[100px] px-4 
            ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-orange-500 text-white'}`}>
            <div>
                @ 2024 Explorin. All Rights Reserved
            </div>
            <div className='flex justify-around w-[300px]'>
                <div className={`flex items-center justify-center rounded-full`}>
                    <FaFacebook size={31} color="white" />
                </div>
                <div className={`flex items-center justify-center rounded-full`}>
                    <FaYoutube size={31} color="white" />
                </div>
                <div className={`flex items-center justify-center rounded-full`}>
                    <FaInstagram size={31} color="white" />
                </div>
                <div className={`flex items-center justify-center rounded-full`}>
                    <FaTwitter size={31} color="white" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
