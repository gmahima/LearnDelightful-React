import React from "react";
import ReactDOM from "react-dom";
import { func } from "prop-types";

const mountNode = document.getElementById("root");

function Job(props) {
  return (
    <li>
      {
        <article className="media job">
          <div className="media-content">
            <h4>{props.title}</h4>
          </div>
        </article>
      }
    </li>
  );
}

function FilterJobs() {
  return null;
}

function JobsList() {
  const jobTitles = ["Lead Engineer", "Junior Engineer", "some other Engineer"];
  const elements = jobTitles.map(title => <Job title={title} />);
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
