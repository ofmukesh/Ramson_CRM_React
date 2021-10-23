import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar"


function App() {
  return (
    <div className="main">
      <NavBar />
    </div>
  );
}

export default App;
