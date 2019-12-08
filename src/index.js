import React from "react";
import ReactDOM from "react-dom";
import { func } from "prop-types";

const mountNode = document.getElementById("root");

function FilterJobs() {
  return null;
}

function JobsList() {
  const jobTitles = ["Lead Engineer", "Junior Engineer", "some other Engineer"];
  const elements = jobTitles.map(title => (
    <article className="media job">
      <div className="media-content">
        <h4>{title}</h4>
      </div>
    </article>
  ));
  return <ol>{elements}</ol>;
}

function App() {
  return (
    <div>
      <FilterJobs />
      <JobsList />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
