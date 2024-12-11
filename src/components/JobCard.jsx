import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { useJobData } from '../Context/JobData';
import { useDarkMode } from '../Context/DarkMode';

const JobCard = ({ jobRole, workType, salary, companyIcon, companyName, location, jobId }) => {
    const { bookmarkedJobs, toggleBookmark } = useJobData();
    const { darkMode } = useDarkMode();
    const isBookmarked = bookmarkedJobs.some((job) => job.jobId === jobId);

    const jobDetails = {jobRole, workType, salary, companyIcon, companyName, location, jobId};


    return (
        <div className={`p-4 rounded-lg border transition-all duration-300 relative 
            ${darkMode ? 'bg-gray-800 shadow-md border-gray-700 hover:bg-gradient-to-r hover:from-orange-900 hover:to-gray-800' : 'bg-white shadow-lg border-gray-200 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white'}`}>
            <div className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{jobRole}</div>
            <div className={`text-sm font-medium my-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{workType}</div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Salary: {salary}</div>
            <div className="flex items-center mt-4">
                <img src={companyIcon} alt={companyName} className={`h-8 w-8 rounded-full mr-3 border-2 
                    ${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />
                <div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{companyName}</div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{location}</div>
                </div>
            </div>
        
            <div
                className={`absolute bottom-4 right-4 cursor-pointer transition-colors duration-300 
                    ${darkMode ? 'text-gray-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-500'}`}
                onClick={() => toggleBookmark(jobDetails)}
            >
                <FaBookmark size={20} color={isBookmarked ? "orange" : darkMode ? "gray" : "gray"} />
            </div>
        </div>
    );
};

export default JobCard;
