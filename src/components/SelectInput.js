import React, { useState } from "react";
export default function SelectInput({ onChange, value, options }) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const toggleAreOptionsVisible = () => {
    if (areOptionsVisible) {
      setAreOptionsVisible(false);
    } else {
      setAreOptionsVisible(true);
    }
  };
  function changeOption(event) {
    onChange(event.target.dataset.option);
    setAreOptionsVisible(false);
  }
  return (
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {options.map(option => (
          <p
            data-option={option}
            className="dropdown-item"
            onClick={changeOption}
            key={option}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
