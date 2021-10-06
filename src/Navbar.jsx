import React from "react";
import ThemeSelector from "./ThemeSelector";

function Navbar({ state, setState }) {
  return (
    <>
      <nav className="navbar" id="nav">
        <ThemeSelector state={state} setState={setState} />
      </nav>
    </>
  );
}

export default Navbar;
