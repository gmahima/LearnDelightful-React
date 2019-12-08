import React from "react";
import ReactDOM from "react-dom";
//import { func } from "prop-types";

const mountNode = document.getElementById("root");
import FilterJobs from "components/FilterJobs";
import JobsList from "components/JobsList";
function App() {
  return (
    <div>
      <FilterJobs />
      <JobsList />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
