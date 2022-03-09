import "./custom.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

document
  .getElementById("root")
  .classList.add(
    "container-fluid",
    "d-flex",
    "align-items-center",
    "flex-column",
    "justify-content-center"
  );

ReactDOM.render(
  <React.StrictMode>
    <App />
    <>
      <a
        className="small"
        href="https://codepen.io/hezag/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        by hezag
      </a>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
