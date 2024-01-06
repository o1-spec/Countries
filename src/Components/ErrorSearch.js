import React from "react";
import { Link } from "react-router-dom";
import NavComponent from "./NavComponents";

function ErrorSearch({theme,toggleTheme}) {
  return (
    <>
      <NavComponent theme={theme} toggleTheme={toggleTheme}/>
      <div className="error">
        <h4>404 Page not found :(</h4>
        <Link to="/">Go Back</Link>
      </div>
    </>
  );
}

export default ErrorSearch;
