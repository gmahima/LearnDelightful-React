import React, { useState } from "react";
import ReactDOM from "react-dom";
//import { func } from "prop-types";
import FilterJobs from "./components/FilterJobs";
import JobsList from "./components/JobList";
const mountNode = document.getElementById("root");
function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <FilterJobs searchText={searchText} setSearchText={setSearchText} />
      <JobsList searchText={searchText} />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
