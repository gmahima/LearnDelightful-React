import React, { useEffect } from "react";
//import useInputState from '../hooks/useInputState'
export default function FilterJobs({
  searchText,
  showOnlyFeatured,
  showOnlyRemote
}) {
  const searchHeading = searchText.value
    ? searchText.value + "as search string"
    : "Search Jobs";
  useEffect(() => {
    console.log(searchHeading);
    document.title = searchHeading;
    console.log(document.title + " is title");
  });
  return (
    <section className="section filter-jobs">
      <h1>Search Jobs</h1>
      <div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" {...searchText} />
          </div>
        </div>
        <div className="field">
          <label className="label">Options</label>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <label className="checkbox" htmlFor="featured">
              <input id="featured" type="checkbox" {...showOnlyFeatured} />
              Featured
            </label>
          </div>
          <div className="control">
            <label className="checkbox" htmlFor="remote">
              <input
                id="remote"
                type="checkbox"
                checked={showOnlyRemote.checked}
                onChange={showOnlyRemote.onChange}
              />
              Remote
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
