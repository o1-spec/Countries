import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

function CountryDesc() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchCountryData = async function () {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    data.length = 100;

    //console.log(data)
    setCountries([...data]);
    setIsLoading(false);
    //console.log(countries[0]);
  };

  const fetchRegion = async function (e) {
    let region = e.target.value;

    if (region === "") return;

    if (region === "All") {
      fetchCountryData();
    } else {
      setIsLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );

      const data = await response.json();

      setCountries([...data]);
      setIsLoading(false);
    }
  };

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/countries/${countryName}`);
  }

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div
      className="countries-content"
    >
      <form className="filter" onSubmit={handleSearch}>
        <label htmlFor="SearchInput">
          <button className="submit" type="submit">
            <img src="/design/Search.svg" alt="Search icon" />
          </button>
          <input
            name="SearchInput"
            type="text"
            value={countryName}
            placeholder="Search for a Country"
            onChange={(e) => setCountryName(e.target.value)}
          />
        </label>
        <select name="region" onChange={fetchRegion}>
          <option value="">Filter by Region</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="countries-container">
          {countries.map((item, index) => (
            <Link
              to={`/countries/${item.name.common}`}
              className="country"
              key={index}
            >
              <img src={item.flags.svg} alt="" />
              <div className="country-info">
                <p className="link">{item.name.official}</p>
                <p className="link">
                  Population: <span>{item.population}</span>
                </p>
                <p className="link">
                  Region: <span>{item.region}</span>
                </p>
                <p className="link">
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryDesc;
