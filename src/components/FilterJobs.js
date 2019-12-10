import React from "react";
export default function FilterJobs({
  searchText,
  setSearchText,
  showOnlyFeatured,
  showOnlyRemote,
  setShowOnlyFeatured,
  setShowOnlyRemote
}) {
  function handleChange(event) {
    const newVal = event.target.value;
    setSearchText(newVal);
  }
  function handleShowOnlyFeatured(event) {
    setShowOnlyFeatured(event.target.checked);
  }
  function handleShowOnlyRemote(event) {
    setShowOnlyRemote(event.target.checked);
  }
  return (
    <section className="section filter-jobs">
      <h1>Search Jobs</h1>
      <div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              value={searchText}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Options</label>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <label className="checkbox" htmlFor="featured">
              <input
                id="featured"
                type="checkbox"
                checked={showOnlyFeatured}
                onChange={event => {
                  console.log(event.target.checked);
                  return handleShowOnlyFeatured(event);
                }}
              />
              Featured
            </label>
          </div>
          <div className="control">
            <label className="checkbox" htmlFor="remote">
              <input
                id="remote"
                type="checkbox"
                checked={showOnlyRemote}
                onChange={event => {
                  console.log(event.target.checked);
                  return handleShowOnlyRemote(event);
                }}
              />
              Remote
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
