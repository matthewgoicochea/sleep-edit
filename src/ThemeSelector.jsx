import React from "react";

function ThemeSelector({ state, setState }) {
  function toggleLightButton() {
    const body = document.querySelector(".body");
    const buttons = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".card");
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    setState({ ...state, lightsOn: !state.lightsOn });

    // toggle off
    if (state.lightsOn === true) {
      body.classList.add("bg-dark");
      body.classList.add("text-light");
      sun.classList.remove("d-none");
      moon.classList.add("d-none");

      buttons.forEach((btn) => {
        btn.classList.add("text-light");
      });

      cards.forEach((card) => {
        card.classList.add("bg-dark");
        card.classList.add("text-light");
        card.classList.add("border-light");
      });
    }

    // toggle on
    if (state.lightsOn === false) {
      body.classList.remove("bg-dark");
      body.classList.remove("text-light");
      sun.classList.add("d-none");
      moon.classList.remove("d-none");

      buttons.forEach((btn) => {
        btn.classList.remove("text-light");
      });

      cards.forEach((card) => {
        card.classList.remove("bg-dark");
        card.classList.remove("text-light");
      });
    }
  }

  return (
    <nav className="navbar" id="nav">
      <div className="container-fluid justify-content-end px-0">
        <button
          className="btn shadow-none"
          id="lightBtn"
          onClick={toggleLightButton}
        >
          <i className="bi bi-brightness-high d-none" id="sun"></i>
          <i className="bi bi-moon" id="moon"></i>
        </button>
      </div>
    </nav>
  );
}

export default ThemeSelector;
