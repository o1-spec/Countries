import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import NavComponent from "./NavComponents";
import Loading from "./Loading";

function Country({theme,toggleTheme}) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  console.log(id);

  const fetchCountryData = async function () {
    setIsLoading(true);
    const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    let data = await response.json();

    // console.log(data);
    setCountries([...data]);
    // console.log(countries);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      fetchCountryData();
    } catch (err) {
      console.log(err.message);
    }

    return () => {};
  }, []);
  //console.log(countries);
  return (
    <div className="countries-info">
      <NavComponent theme={theme} toggleTheme={toggleTheme}/>
      <div className="country-component">
        <div className="back">
          <Link to="/">&larr; &nbsp;  Back</Link>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {countries.map((item, index) => (
              <div className="info-content" key={index}>
                <div className="info-img">
                  <img src={item.flags.svg} alt="" />
                </div>
                <div className="country-info">
                  <h1>{item.name.official}</h1>

                  <div className="data">
                    <div className="data-1">
                      <p>
                        Common name: <span>{item.name.common}</span>
                      </p>
                      <p>
                        Population: <span>{item.population}</span>
                      </p>
                      <p>
                        Region: <span>{item.region}</span>
                      </p>
                      <p>
                        Sub region: <span>{item.subregion}</span>
                      </p>
                      <p>
                        Capital: <span>{item.capital}</span>
                      </p>
                    </div>
                    <div className="data-2">
                      <p>
                        Top level domain: <span>{item.tld[0]}</span>
                      </p>
                      <p>
                        Currencies:{" "}
                        <span>
                          {Object.entries(item.currencies)[0][1].name}{" "}
                        </span>
                      </p>
                      <p>
                        Language:{" "}
                        <span>{Object.entries(item.languages)[0][1]}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Country;
