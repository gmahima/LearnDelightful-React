import React from "react";
import ReactDOM from "react-dom";

const mountNode = document.getElementById("root");
function App() {
  return (
    <div>
      <p>hello</p>
      <span>{1}</span>
    </div>
  );
}
ReactDOM.render(<App />, mountNode);
