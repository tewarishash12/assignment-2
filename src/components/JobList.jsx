import React from 'react'
import jobsData from './jobData'
import JobCard from './JobCard'

const JobList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {jobsData.map((job, index) => (
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
    )
}

export default JobList