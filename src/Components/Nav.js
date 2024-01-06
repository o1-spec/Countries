import React from "react";
import CountryDesc from "./CountryDesc";
import NavComponent from "./NavComponents";

function Nav({theme,toggleTheme}) {
  return (
    <>
      <NavComponent theme={theme} toggleTheme={toggleTheme}/>
      <CountryDesc />
    </>
  );
}

export default Nav;
