import React from "react";
import Job from "./Job";
import jobs from "../data/jobData";
export default function JobsList() {
  const elements = jobs.map(job => <Job key={job.title} job={job} />);
  return <ol>{elements}</ol>;
}
