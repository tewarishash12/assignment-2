import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const SearchBar = () => {
    return (
        <div
            className='mt-[30px] flex items-center gap-[12px] border-t border-gray-300 rounded-tl-[8px] h-[72px] w-full max-w-[1032px] mx-auto px-[12px] bg-white shadow-md mb-[24px]'
        >
            {/* Job Title Section */}
            <div className='flex items-center gap-[12px] px-3 w-1/2 border-r border-gray-300'>
                <FaSearch size={18} color="gray" />
                <input
                    type="search"
                    placeholder='Job title, Position, Keyword'
                    className='outline-none flex-grow text-sm'
                />
            </div>

            {/* Location Section */}
            <div className='flex items-center gap-[12px] px-3 w-1/2'>
                <FaMapMarkerAlt size={18} color="orange" />
                <input
                    type="search"
                    placeholder='City, State or Country'
                    className='outline-none flex-grow text-sm'
                />
                <HiOutlineLocationMarker size={18} color="gray" />
            </div>

            {/* Find Job Button */}
            <button
                type="submit"
                className='bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 h-[50px] w-[150px]'
            >
                Find Job
            </button>
        </div>
    );
};

export default SearchBar;
