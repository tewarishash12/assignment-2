import React, { useState, useEffect } from 'react';
import jobsData from './jobData';
import JobCard from './JobCard';

const JobList = () => {
    const [visibleJobs, setVisibleJobs] = useState(12);

    const handleInfiniteScroll = () => {
        console.log("scrollHeight", document.documentElement.scrollHeight); // 879
        console.log("innerHeight", window.innerHeight); //319
        console.log("scrollTop", document.documentElement.scrollTop); //490
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) {
            setVisibleJobs(prevJobs => prevJobs + 12);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);

        return () => {
            window.removeEventListener("scroll", handleInfiniteScroll);
        };
    }, [visibleJobs]);

    return (
        <div
            id="job-list-container"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 overflow-y-auto"
            style={{ maxHeight: '950px' }} 
        >
            {jobsData.slice(0, visibleJobs).map((job, index) => (
                <JobCard
                    key={index}
                    jobRole={job.jobRole}
                    workType={job.workType}
                    salary={job.salary}
                    companyIcon={job.companyIcon}
                    companyName={job.companyName}
                    location={job.location}
                />
            ))}
        </div>
    );
};

export default JobList;
