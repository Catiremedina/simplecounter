//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let seconds = 0;
setInterval(function () {
	seconds++;
	ReactDOM.render(<Home seconds={seconds} />, document.querySelector("#app"));
}, 1000);
