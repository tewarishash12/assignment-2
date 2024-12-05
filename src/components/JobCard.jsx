import React from 'react';

const JobCard = ({ jobRole, workType, salary, companyIcon, companyName, location }) => {
    return (
        <div className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white">
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
        </div>
    );
};

export default JobCard;
