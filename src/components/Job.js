import React from "react";
export default function Job(props) {
  const { title, desc } = props.job;
  return (
    <li>
      {
        <article className="media job">
          <div className="media-content">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </article>
      }
    </li>
  );
}
