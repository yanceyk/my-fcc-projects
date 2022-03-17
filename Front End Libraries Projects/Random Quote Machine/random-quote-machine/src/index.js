import "./custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
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
      <p className="small">
        View the full source on &nbsp;
        <a
          href="https://github.com/yanceyk/my-fcc-projects/tree/master/Front%20End%20Libraries%20Projects/Random%20Quote%20Machine/random-quote-machine"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="View on Github"
        >
          <FontAwesomeIcon icon={ faGithubSquare } />
        </a>
      </p>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
