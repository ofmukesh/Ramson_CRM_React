import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import LeadForm from "./components/Form/lead_form";

import NavBar from "./components/Nav/navbar";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
      </Router>
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/form" component={LeadForm} />
          {/* <Route path="/" component={} /> */}
          {/* <Route path="/" component={} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
