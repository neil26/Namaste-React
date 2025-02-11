import React from "react";
import ReactDOM from 'react-dom/client';
const parent = React.createElement(
  "div",
  { id: "main" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("p", {}, "This is the First app with React.")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
