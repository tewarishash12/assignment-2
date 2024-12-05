import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='flex justify-around items-center bg-orange-500 text-white h-[100px] px-4'>
            <div>
                @ 2024 Explorin. All Rights Reserved
            </div>
            <div className='flex justify-around w-[300px]'>
                <div className="flex items-center justify-center bg-slate-100 rounded-full">
                    <FaFacebook size={31} color="blue" />
                </div>
                <div className="flex items-center justify-center bg-slate-100 rounded-full">
                    <FaYoutube size={31} color="red" />
                </div>
                <div className="flex items-center justify-center bg-slate-100 rounded-full">
                    <FaInstagram size={31} color="purple" />
                </div>
                <div className="flex items-center justify-center bg-slate-100 rounded-full">
                    <FaTwitter size={31} color="skyblue" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
