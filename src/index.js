import React, { useState } from "react";
import ReactDOM from "react-dom";
//import { func } from "prop-types";
import FilterJobs from "./components/FilterJobs";
import JobsList from "./components/JobList";
const mountNode = document.getElementById("root");
function App() {
  const [searchText, setSearchText] = useState("");
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const [showOnlyRemote, setShowOnlyRemote] = useState(false);
  return (
    <div>
      <FilterJobs
        searchText={searchText}
        setSearchText={setSearchText}
        showOnlyFeatured={showOnlyFeatured}
        showOnlyRemote={showOnlyRemote}
        setShowOnlyFeatured={setShowOnlyFeatured}
        setShowOnlyRemote={setShowOnlyRemote}
      />
      <JobsList
        searchText={searchText}
        showOnlyFeatured={showOnlyFeatured}
        showOnlyRemote={showOnlyRemote}
      />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
