import React from "react";
import "./Countries.css";

function Country({ name, population, region, capital, flag, darkMode }) {
  return (
    <div className="article">
      <img src={flag} alt={name} />
      <div
        className="details"
        style={{
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <h3
          style={{
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {name}
        </h3>
        <h4
          style={{
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Population:{" "}
          <span
            style={{
              color: darkMode ? "#fff" : "#000",
            }}
          >
            {population}
          </span>
        </h4>
        <h4
          style={{
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Region:{" "}
          <span
            style={{
              color: darkMode ? "#fff" : "#000",
            }}
          >
            {region}
          </span>
        </h4>
        <h4
          style={{
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Capital:{" "}
          <span
            style={{
              color: darkMode ? "#fff" : "#000",
            }}
          >
            {capital}
          </span>
        </h4>
      </div>
    </div>
  );
}

export default Country;
