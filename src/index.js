import React from "react";
import ReactDOM from "react-dom";
//import { func } from "prop-types";
import FilterJobs from "./components/FilterJobs";
import JobsList from "./components/JobList";
const mountNode = document.getElementById("root");
function App() {
  return (
    <div>
      <FilterJobs />
      <JobsList />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
