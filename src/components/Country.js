import React from "react";
import "./Countries.css"

function Country({ name, population, region, capital, flag }) {
  return (
    <div className="article">
      <img src={flag} alt={name} />
      <div className="details">
        <h3>{name}</h3>
        <h4>
          Population: <span>{population}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Capital: <span>{capital}</span>
        </h4>
      </div>
    </div>
  );
}

export default Country;
