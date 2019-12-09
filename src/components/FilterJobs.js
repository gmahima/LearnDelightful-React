import React, { useState } from "react";
export default function FilterJobs(props) {
  const [val, setVal] = useState("");
  function handleChange(event) {
    const newVal = event.target.value;
    setVal(newVal);
    console.log(val);
  }
  return (
    <section className="section filter-jobs">
      <h1>Search Jobs</h1>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input" value={val} onChange={handleChange} />
        </div>
      </div>
    </section>
  );
}
