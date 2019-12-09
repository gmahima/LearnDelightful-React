import React, { useState } from "react";

export default function Job(props) {
  const [isDetail, setIsDetail] = useState(false);
  const { title, desc } = props.job;
  function handleClick() {
    setIsDetail(!isDetail);
  }
  return (
    <li>
      {
        <article onClick={handleClick} className="media job">
          <div className="media-content">
            <h4>{title}</h4>
            {isDetail ? <p>{desc}</p> : null}
          </div>
        </article>
      }
    </li>
  );
}
