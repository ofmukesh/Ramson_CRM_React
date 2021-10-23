import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://localhost:3000/">
          <img src="logo.png" alt="" width="40" height="40" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
