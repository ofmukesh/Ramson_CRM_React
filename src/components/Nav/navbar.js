import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  const logOut = () => {
    var confm = "YES";
    if (confm == "YES") {
      alert("⚠️ Press 'OK' for Logout");
    }
  };
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="logo.png" alt="" height="40" width="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/form">
                  Form
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/table">
                  Table
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn text-warning"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Feedback"
                aria-label="Feedback"
              />
              <button className="btn btn-outline-dark" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default NavBar;
