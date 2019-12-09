import React from "react";
import Job from "./Job";
import jobs from "../data/jobData";
export default function JobsList(props) {
  const { searchText, showOnlyFeatured, showOnlyRemote } = props;
  const filteredJobs = jobs.filter(job => {
    return job.title.toLowerCase().includes(searchText.toLowerCase());
  });
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
