import React from "react";
import ReactDOM from "react-dom";

const mountNode = document.getElementById("root");
ReactDOM.render(
  React.createElement("p", {
    children: "Hello Create React App!"
  }),
  mountNode
);
