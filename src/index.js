import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import Header from "./Components/Header";
import User from "./Components/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const myname = "Farah";
const mainediv = {
  color: "blue",
  fontSize: "16px",
  fontWeight: "bold",
  width: "500px",
  margin: "auto",
};
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="background">
    <Header />
    <User name="Farah" work="student" />
    <User name="Farah2" work="software engineer" />

    <h1 style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
      Hello {myname}
    </h1>
    <p style={mainediv}>
      React is the library for web and native user interfaces. Build user
      interfaces out of individual pieces called components written in
      JavaScript. React is designed to let you seamlessly combine components
      written by independent people, teams, and organizations.
    </p>
  </div>);*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
