import React from "react";

function ThemeSelector({ state, setState }) {
  function toggleLightButton() {
    const body = document.querySelector(".body");
    const lightBtn = document.querySelector("#lightBtn");
    const app = document.querySelector("#app");
    const cards = document.querySelectorAll(".card");
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    setState({ ...state, lightsOn: !state.lightsOn });

    // toggle off
    if (state.lightsOn === true) {
      body.classList.add("bg-dark");
      sun.classList.remove("d-none");
      moon.classList.add("d-none");
      lightBtn.classList.add("text-light");
      app.classList.add("bg-dark");
      app.classList.add("text-light");

      cards.forEach((card) => {
        card.classList.add("bg-dark");
        card.classList.add("text-light");
        card.classList.add("border-light");
      });
    }

    // toggle on
    if (state.lightsOn === false) {
      body.classList.remove("bg-dark");
      sun.classList.add("d-none");
      moon.classList.remove("d-none");
      lightBtn.classList.remove("text-light");
      app.classList.remove("bg-dark");
      app.classList.remove("text-light");

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
