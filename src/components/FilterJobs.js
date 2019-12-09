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
  return (
    <section className="section filter-jobs">
      <h1>Search Jobs</h1>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input" value={searchText} onChange={handleChange} />
        </div>
      </div>
    </section>
  );
}
