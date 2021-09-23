import React from "react";
import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

function Navbar({ state, setState }) {
  return (
    <>
      <nav className="navbar" id="nav">
        <ThemeSelector state={state} setState={setState} />
        <div className="navbbar-nav">
          <Link to="journal" className="nav-link">
            journal
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
