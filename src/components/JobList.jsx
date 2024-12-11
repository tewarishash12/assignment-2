import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { useJobData } from '../Context/JobData';
import { useDarkMode } from '../Context/DarkMode';

const JobList = () => {
    const [visibleJobs, setVisibleJobs] = useState(12);
    const { jobsData } = useJobData();
    const { darkMode } = useDarkMode();

    const handleInfiniteScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight)
            setVisibleJobs(prevJobs => prevJobs + 12);
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
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 overflow-y-auto ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
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
                    jobId={job.Id}
                />
            ))}
        </div>
    );
};

export default JobList;
