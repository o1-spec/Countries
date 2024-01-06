import "./App.css";
//import CountryDesc from "./Components/CountryDesc";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Country from "./Components/Country";
import ErrorSearch from "./Components/ErrorSearch";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Nav theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route path="/countries/:id" element={<Country theme={theme} toggleTheme={toggleTheme}/>} />
            <Route path="*" element={<ErrorSearch theme={theme} toggleTheme={toggleTheme}/>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={ <CountryDesc />}/>
            <Route path="/countries/:id" element={<Country />} />
          </Route>
        </Routes>
  </BrowserRouter>*/}
    </div>
  );
}

export default App;
