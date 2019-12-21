import React, { useState } from "react";
import useOutsideClickRef from "../hooks/useOutsideClickRef";
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
  const ref = useOutsideClickRef(
    setAreOptionsVisible(false),
    areOptionsVisible
  );
  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger" onClick={toggleAreOptionsVisible}>
        <button
          className="button is-info"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{value}</span>
        </button>
      </div>
      {areOptionsVisible ? (
        <div className="dropdown-menu" ref={ref} id="dropdown-menu" role="menu">
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
      ) : null}
    </div>
  );
}
