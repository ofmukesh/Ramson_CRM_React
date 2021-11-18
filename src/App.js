import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import CSalesForm from "./components/Form/sales_form";
import Welcome from "./pages/welcome";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import Table from "./components/Table/table";

import NavBar from "./components/Nav/navbar";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
      </Router>
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={CSalesForm} />
          <Route path="/table" component={Table} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
