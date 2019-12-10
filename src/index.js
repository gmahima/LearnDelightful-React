import React from "react";
import ReactDOM from "react-dom";
//import { func } from "prop-types";
import FilterJobs from "./components/FilterJobs";
import JobsList from "./components/JobList";
import useInputState from "./hooks/useInputState";
import useCheckboxState from "./hooks/useCheckboxState";
const mountNode = document.getElementById("root");
function App() {
  const searchText = useInputState("");
  const showOnlyFeaturedCheckboxState = useCheckboxState(false);
  const showOnlyRemoteCheckboxState = useCheckboxState(false);
  return (
    <div>
      <FilterJobs
        searchText={searchText}
        showOnlyFeatured={showOnlyFeaturedCheckboxState}
        showOnlyRemote={showOnlyRemoteCheckboxState}
      />
      <JobsList
        searchText={searchText.value}
        showOnlyFeatured={showOnlyFeaturedCheckboxState.checked}
        showOnlyRemote={showOnlyRemoteCheckboxState.checked}
      />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
