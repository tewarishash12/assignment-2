import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';

const JobCard = ({ jobRole, workType, salary, companyIcon, companyName, location, jobId }) => {
    const [isBookmarked, setIsBookmarked] = useState(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
        return savedBookmarks.some((job) => job.jobId === jobId);
    });

    // Handle bookmark click
    const handleBookmark = () => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
        
        const jobDetails = { jobRole, workType, salary, companyIcon, companyName, location, jobId };
        const isJobAlreadyBookmarked = savedBookmarks.some((job) => job.jobId === jobId);

        if (isJobAlreadyBookmarked) {
            const updatedBookmarks = savedBookmarks.filter((job) => job.jobId !== jobId);
            localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedBookmarks));
            setIsBookmarked(false); 
        } else {
            savedBookmarks.push(jobDetails);
            localStorage.setItem('bookmarkedJobs', JSON.stringify(savedBookmarks));
            setIsBookmarked(true); 
        }
    };

    return (
        <div className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white relative">
            <div className="text-lg font-semibold">{jobRole}</div>
            <div className="text-sm text-green-600 font-medium my-1">{workType}</div>
            <div className="text-sm text-gray-600">Salary: {salary}</div>
            <div className="flex items-center mt-4">
                <img src={companyIcon} alt={companyName} className="h-8 w-8 rounded-full mr-3" />
                <div>
                    <div className="text-sm font-medium">{companyName}</div>
                    <div className="text-xs text-gray-500">{location}</div>
                </div>
            </div>

            <div
                className="absolute bottom-4 right-4 text-gray-500 hover:text-orange-500 cursor-pointer"
                onClick={handleBookmark}
            >
                <FaBookmark size={20} color={isBookmarked ? "orange" : "gray"} />
            </div>
        </div>
    );
};

export default JobCard;
