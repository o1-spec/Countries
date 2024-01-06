import React from "react";
import { Outlet } from "react-router-dom";

function NavComponent({ toggleTheme, theme }) {

  return (
    <>
      <div className="nav" id={theme}>
        <h3 id={theme}>Where in the world ?</h3>
        <div className="dark-button" onClick={toggleTheme}>
          {theme === "light" ? (
            <img src="/design/Moon.svg" alt="Moon Icon" />
          ) : (
            <img src="/design/Sun.svg" alt="Sun Icon" />
          )}
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>

      <Outlet context={[theme]} />
    </>
  );
}

export default NavComponent;
