import React from "react";
import Job from "./Job";
import jobs from "../data/jobData";
export default function JobsList(props) {
  const { searchText, showOnlyFeatured, showOnlyRemote } = props;
  let filteredJobs = jobs.filter(job => {
    return job.title.toLowerCase().includes(searchText.toLowerCase());
  });
  if (showOnlyFeatured) {
    filteredJobs = filteredJobs.filter(job => job.isFeatured);
  }

  if (showOnlyRemote) {
    filteredJobs = filteredJobs.filter(job => job.isRemote);
  }
  return (
    <div>
      <ol>
        {filteredJobs.map(job => (
          <Job key={job.title} job={job} />
        ))}
      </ol>
    </div>
  );
}
